<?php
namespace App\Http\Actions\Store;

use Carbon\Carbon;
use App\Models\User;
use App\Models\Booking;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Notification;
use App\Notifications\BookingRequestNotification;

class StoreBookingAction
{
    public function execute(Request $request)
    {
        # code...
       $booking = Booking::create([
            'booking_date' => $request->booking_date,
            'user_id' => auth()->id(),
            'station_id' => $request->station_id,
            'game_id' => $request->game_id,
            'start_time' => Carbon::parse($request->start_time)->format('H:i'),
            'end_time' => Carbon::parse($request->end_time)->format('H:i'),
        ]);

        $admin = User::role('SuperAdmin','api')->get();

        Notification::send($admin, new BookingRequestNotification($booking));

    }
}
