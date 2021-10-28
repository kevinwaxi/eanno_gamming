<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\Store\StorePermissionRequest;
use App\Http\Requests\Update\UpdatePermissionRequest;
use App\Http\Resources\PermissionResource;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Permission;

class PermissionsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //
        // if the permission querried has some request in it PAGINATION else get all permissions
        // in the scenario that i want to have then in a list without pagination
        if ($request->total) {
            $paginate = $request->total;
            $search_term = request('q', '');
            $selected = request('select');
            $sort_direction = request('sort_direction', 'desc');
            $sort_field = request('sort_field', 'created_at');

            if (!in_array($sort_direction, ['asc', 'desc'])) {
                $sort_direction = 'desc';
            }
            if (!in_array($sort_field, ['name', 'created_at'])) {
                $sort_field = 'created_at';
            }

            $permission = Permission::when($selected, function ($query) use ($selected) {
                $query->WhereHas('roles', function ($query) use ($selected) {
                    $query->where('id', $selected);
                });
            })
                ->search(trim($search_term))
                ->orderBy($sort_field, $sort_direction)
                ->paginate($paginate);

            return PermissionResource::collection($permission);
        } else {
            $permission = Permission::all();
            # code...
            return PermissionResource::collection($permission);
        }

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StorePermissionRequest $request)
    {
        //
        $permissions = new Permission($request->all());
        $permissions->save();

        return $permissions;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        // shoe one permission
        return Permission::pluck('id');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatePermissionRequest $request, $id)
    {
        //

        $permission = Permission::where('id', $id)->update($request->validated());

        return $permission;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $permission
     * @return \Illuminate\Http\Response
     */
    public function destroy(Permission $permission)
    {
        //delete selected model
        $permission->delete();
        return response()->noContent();
    }

    /**
     * Remove the massSelected resource from storage.
     *
     * @param string $permissions
     * @return \Illuminate\Http\Response
     */
    public function massDestroy($permissions)
    {
        #convert string into array
        $permissionsArray = explode(',', $permissions);
        Permission::whereKey($permissionsArray)->delete();

        return response()->noContent();
    }
}
