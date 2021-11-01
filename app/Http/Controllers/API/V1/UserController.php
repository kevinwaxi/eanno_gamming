<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\Update\UpdateProfileRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
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

            $user = User::when($selected, function ($query) use ($selected) {
                $query->WhereHas('roles', function ($query) use ($selected) {
                    $query->where('id', $selected);
                });
            })
                ->search(trim($search_term))
                ->orderBy($sort_field, $sort_direction)
                ->paginate($paginate);

            return UserResource::collection($user);
        } else {
            $user = User::all();
            # code...
            return UserResource::collection($user);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
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
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function ban(Request $request, $id)
    {
        $this->validate($request, [
            'banned_until' => 'required|date',
        ]);
        return User::where('id', $id)->update([
            'banned_until' => Carbon::parse($request->banned_until),
        ]);

    }

    public function restore($id)
    {
        # code...
        return User::where('id', $id)->update([
            'banned_until' => null,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function profile()
    {
        # code...
        $user = Auth::user()->id;
        $profile = User::where('id', $user)->first();

        return $profile;
    }

    public function upload(Request $request)
    {
        # code...
        $id = auth('api')->user()->id;

        if ($request->hasFile('avatar')) {

            $file = $request->file('avatar');
            $filename = $file->getClientOriginalName();
            $folder = uniqid() . '-' . now()->timestamp;
            $file->storeAs('public/avatars' . $folder, $filename);

            User::where('id', $id)->update([
                'avatar' => $file,
            ]);

            return $folder;
        }
        return '';
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updateProfile(UpdateProfileRequest $request)
    {

        $id = auth('api')->user()->id;
        $user = User::where('id', $id)->update($request->validated());

        return $user;
    }
}
