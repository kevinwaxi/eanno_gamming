<?php

namespace App\Http\Controllers\API\V1\Gamer;

use App\Models\Booking;
use App\Models\Station;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Spatie\QueryBuilder\QueryBuilder;
use App\Http\Resources\BookingResource;
use App\Http\Actions\Store\StoreStationBookingAction;
use Symfony\Component\HttpKernel\Event\ResponseEvent;
use App\Http\Requests\Store\StoreStationBookingRequest;

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
        $user = Auth::user()->id;
        $booking = Booking::where('user_id', $user);

        $query = QueryBuilder::for($booking)
            ->allowedFilters(['status', 'time'])
            ->allowedSorts(['status', 'name'])
            ->get();

        return BookingResource::collection($query);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreStationBookingRequest $request, StoreStationBookingAction $action)
    {
        //
        $action->execute($request);

        return response()->json(['msg', 'Success']);
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
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Station  $station
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Station $station)
    {
        //
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
    }
}
