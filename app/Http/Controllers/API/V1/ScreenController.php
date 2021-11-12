<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Actions\Store\StoreScreenAction;
use App\Http\Actions\Update\UpdateScreenAction;
use App\Http\Controllers\Controller;
use App\Http\Requests\Store\StoreScreenRequest;
use App\Http\Requests\Update\UpdateScreenRequest;
use App\Http\Resources\ScreenResource;
use App\Models\Screen;
use Illuminate\Http\Request;

class ScreenController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if ($request->total) {
            $paginate = $request->total;
            $search_term = request('q', '');
            $selected = request('select');
            $sort_direction = request('sort_direction', 'desc');
            $sort_field = request('sort_field', 'created_at');

            if (!in_array($sort_direction, ['asc', 'desc'])) {
                $sort_direction = 'desc';
            }
            if (!in_array($sort_field, ['serial_number', 'type', 'created_at'])) {
                $sort_field = 'created_at';
            }

            $screen = Screen::when($selected, function ($query) use ($selected) {
                $query->WhereHas('condition', function ($query) use ($selected) {
                    $query->where('id', $selected);
                });
            })
                ->search(trim($search_term))
                ->orderBy($sort_field, $sort_direction)
                ->paginate($paginate);

            return ScreenResource::collection($screen);
        } else {
            $screen = Screen::all();
            # code...
            return ScreenResource::collection($screen);
        }}

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreScreenRequest $request, StoreScreenAction $storeScreenAction)
    {
        //
        $storeScreenAction->execute($request);
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
    public function update(UpdateScreenRequest $request, UpdateScreenAction $updateScreenAction, $id)
    {
        //
        $updateScreenAction->execute($request);
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
}
