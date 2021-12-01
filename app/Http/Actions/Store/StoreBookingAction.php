<?php
namespace App\Http\Actions\Store;

use App\Models\Station;
use App\Models\User;
use App\Notifications\BookingRequestNotification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Notification;

class StoreBookingAction
{
    public function execute(Request $request)
    {
        $user = Auth::user();
        $station = Station::where($request->station_id);

        // Extends \Rinvex\Bookings\Models\BookableBooking
        $serviceBooking = new \App\Models\ServiceBooking;

        // Create a new booking explicitly
        $serviceBooking->make(['starts_at' => \Carbon\Carbon::now(), 'ends_at' => \Carbon\Carbon::tomorrow()])
            ->customer()->associate($user)
            ->bookable()->associate($station)
            ->save();
        # code...

        // $booking = Booking::create([
        //     'booking_date' => $request->booking_date,
        //     'user_id' => auth()->id(),
        //     'station_id' => $request->station_id,
        //     'game_id' => $request->game_id,
        //     'start_time' => Carbon::parse($request->start_time)->format('H:i'),
        //     'end_time' => Carbon::parse($request->end_time)->format('H:i'),
        // ]);

        $admin = User::role('SuperAdmin', 'api')->get();

        Notification::send($admin, new BookingRequestNotification($station));
    }
}
