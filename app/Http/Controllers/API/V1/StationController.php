<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Actions\Store\StoreStationAction;
use App\Http\Controllers\Controller;
use App\Http\Requests\Store\StoreStationRequest;
use App\Http\Resources\StationResource;
use App\Models\Station;
use Illuminate\Http\Request;

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

            $station = Station::when($selected, function ($query) use ($selected) {
                $query->WhereHas('available', function ($query) use ($selected) {
                    $query->where('id', $selected);
                });
            })
                ->with(['console', 'screen'])
                ->search(trim($search_term))
                ->orderBy($sort_field, $sort_direction)
                ->paginate($paginate);

            return StationResource::collection($station);
        } else {
            $station = Station::with(['console', 'screen'])->get();
            # code...
            return StationResource::collection($station);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreStationRequest $request, StoreStationAction $storeStationAction)
    {
        //
        $storeStationAction->execute($request);
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
