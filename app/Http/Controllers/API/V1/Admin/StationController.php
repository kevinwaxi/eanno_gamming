<?php

namespace App\Http\Controllers\API\V1\Admin;

use App\Models\Station;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\StationResource;
use App\Http\Actions\Store\StoreStationAction;
use App\Http\Actions\Update\UpdateStationAction;
use App\Http\Requests\Store\StoreStationRequest;
use App\Http\Requests\Update\UpdateStationRequest;

class StationController extends Controller
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
            $selected = request('selected');
            $search_term = request('q', '');
            $sort_direction = request('sort_direction', 'desc');
            $sort_field = request('sort_field', 'created_at');

            if (!in_array($sort_direction, ['asc', 'desc'])) {
                $sort_direction = 'desc';
            }
            if (!in_array($sort_field, ['name', 'created_at'])) {
                $sort_field = 'created_at';
            }

            $stations = Station::when($selected, function ($query) use ($selected) {
                $query->WhereHas('type', function ($query) use ($selected) {
                    $query->where('id', $selected);
                });
            })->search(trim($search_term))
                ->orderBy($sort_field, $sort_direction)
                ->paginate($paginate);

            return StationResource::collection($stations);
        } else {
            $stations = Station::all();
            return StationResource::collection($stations);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreStationRequest $request, StoreStationAction $action)
    {
        //
        $action->execute($request);

        return StationResource::collection(Station::all());
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Station  $station
     * @return \Illuminate\Http\Response
     */
    public function show(Station $station)
    {
        //
        return new StationResource($station);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Station  $station
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateStationRequest $request, Station $station, UpdateStationAction $action)
    {
        //
        $action->execute($request, $station);

        return StationResource::collection(Station::all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Station  $station
     * @return \Illuminate\Http\Response
     */
    public function destroy(Station $station)
    {
        //
        $station->delete();

        return response()->noContent();
    }
}
