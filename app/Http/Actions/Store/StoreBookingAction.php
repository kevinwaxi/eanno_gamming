<?php
namespace App\Http\Actions\Store;

use App\Models\Booking;
use App\Models\User;
use App\Notifications\UserBookingNotification;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Notification;

class StoreBookingAction
{
    public function execute(Request $request)
    {
        $user = Auth::user()->id;

        $booking = Booking::create([
            'booking_date' => date('d-m-Y', strtotime($request->booking_date)),
            'user_id' => $user,
            'game_id' => $request->game_id,
            'start_time' => Carbon::parse($request->start_time)->format('H:i'),
            'end_time' => Carbon::parse($request->end_time)->format('H:i'),
        ]);

        $admin = User::role('super-admin', 'web')->get();

        Notification::send($admin, new UserBookingNotification($booking));
    }
}
