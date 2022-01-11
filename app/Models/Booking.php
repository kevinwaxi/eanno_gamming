<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Booking extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'start_time',
        'end_time',
        'station_id',
        'game_id',
        'check_in',
        'check_out',
        'booking_date',
        'token',
        'status',
    ];

    protected $casts = [
        'booking_date' => 'date',
        'check_in' => 'datetime',
        'check_out' => 'datetime',
    ];

    /**
     * Get the user that owns the Booking
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
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

    public function scopeSearch($query, $term)
    {
        # code...
        $term = "%$term%";

        $query->where(function ($query) use ($term) {
            $query->where('booking_date', 'like', $term)
                ->orWhere('start_time', 'like', $term)
                ->orWhere('end_time', 'like', $term)
                ->orWhereHas('station', function ($query) use ($term) {
                    $query->where('name', 'like', $term);
                });
        });
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
}
