<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\Store\StoreRoleRequest;
use App\Http\Requests\Update\UpdateRoleRequest;
use App\Http\Resources\RoleResource;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;

class RolesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //
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

            $role = Role::when($selected, function ($query) use ($selected) {
                $query->WhereHas('permissions', function ($query) use ($selected) {
                    $query->where('id', $selected);
                });
            })
                ->search(trim($search_term))
                ->orderBy($sort_field, $sort_direction)
                ->paginate($paginate);

            return RoleResource::collection($role);
        } else {
            $role = Role::all();
            # code...
            return RoleResource::collection($role);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreRoleRequest $request)
    {
        //

        $roles = new Role($request->all());
        $roles->givePermissionTo($request->input('permissions'));
        $roles->save();

        return $roles;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        return Role::pluck('id');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateRoleRequest $request, $id)
    {
        //
        $role = Role::findOrFail($id);

        $role->update($request->validated());

        $role->syncPermissions($request->input('permissions'));

        return $role;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Role $role)
    {
        //
        $role->delete();
        return response()->noContent();
    }
}
