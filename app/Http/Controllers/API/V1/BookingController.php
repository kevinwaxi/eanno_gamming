<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Actions\Store\StoreBookingAction;
use App\Http\Controllers\Controller;
use App\Http\Requests\Store\StoreBookingRequest;
use App\Http\Resources\BookingResource;
use App\Models\Booking;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Spatie\QueryBuilder\QueryBuilder;

class BookingController extends Controller
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
            $user_id = auth()->user()->id;
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

            $bookings = Booking::when($selected,
                function ($query) use ($selected) {
                    $query->where('status', $selected);
               })->search(trim($search_term))
                ->orderBy($sort_field, $sort_direction)
                ->with('game')
                ->paginate($paginate);

            return BookingResource::collection($bookings);
        } else {
            $bookings = Booking::all();
            # code...
            return BookingResource::collection($bookings);
        }
    }

    public function getDates(Request $request)
    {
        # code...
        $date = date($request->booking_date);

        $booking = Booking::where('booking_date', $date)->get();

        return response()->json($booking);

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreBookingRequest $request, StoreBookingAction $storeBookingAction)
    {
        //
        $storeBookingAction->execute($request);
    }

    public function approveBooking(Booking $booking)
    {
        # code...
    }

    public function myBookings()
    {
        # code...
        $user = Auth::user()->id;
        $booking = Booking::where('user_id', $user);

        $query = QueryBuilder::for($booking)
                ->allowedFilters(['status', 'time'])
                ->allowedSorts(['status', 'name'])
                ->get();

        return BookingResource::collection($query);
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
