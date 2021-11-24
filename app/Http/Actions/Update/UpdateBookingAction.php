<?php
namespace App\Http\Actions\Update;

use App\Models\Booking;
use Illuminate\Http\Request;

class UpdateBookingAction
{
    public function execute(Request $request, $id)
    {
        # code...
        $booking= Booking::where('id',$id);
        $booking->update([
            'station_id' => $request->station_id,
            'check_in' => $request->check_in,
            'check_out' => $request->check_out,
            'start_time' => $request->start_time,
            'end_time' => $request->end_time,
            'verified_at' => now(),
            'status' => 'Verified',
        ]);
    }
}
