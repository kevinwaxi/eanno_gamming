<?php
namespace App\Http\Actions\Store;

use App\Models\Booking;
use Carbon\Carbon;
use Illuminate\Http\Request;

class StoreBookingAction
{
    public function execute(Request $request)
    {
        # code...
        Booking::create([
            'booking_date' => $request->booking_date,
            'user_id' => auth()->id(),
            'station_id' => $request->station_id,
            'game_id' => $request->game_id,
            'start_time' => Carbon::parse($request->start_time)->format('H:i'),
            'end_time' => Carbon::parse($request->end_time)->format('H:i'),
        ]);
    }
}
