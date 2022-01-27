<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Booking extends Model
{
    protected $guarded = [];

    protected $casts = [
        'booking_date' => 'date'
    ];

    /**
     * Get the user that owns the Booking
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the station that owns the Booking
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function station(): BelongsTo
    {
        return $this->belongsTo(Station::class, 'station_id');
    }

    /**
     * Get the game that owns the Booking
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function game(): BelongsTo
    {
        return $this->belongsTo(Game::class);
    }

    public function getTotalHoursAttribute()
    {
        # code...
        $start = Carbon::parse($this->start_time);
        $end = Carbon::parse($this->end_time);

        $total = $end->diffInHours($start);

        return $total;
    }

    public function getDateForHumansAttribute()
    {
        # code...
        return $this->booking_date->format('d, M Y');
    }

    public function getTotalAttribute()
    {
        # code...
        $base =  250;
        $factor = $this->getTotalHoursAttribute();

        return $base * $factor;
    }
}
