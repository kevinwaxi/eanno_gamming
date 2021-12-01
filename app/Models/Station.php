<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Rinvex\Bookings\Traits\Bookable;

class Station extends Model
{
    use HasFactory, Bookable;

    protected $guarded = [];

    /**
     * Get the available that owns the Station
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function available(): BelongsTo
    {
        return $this->belongsTo(Available::class);
    }

    /**
     * Get the screen that owns the Station
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function screen(): BelongsTo
    {
        return $this->belongsTo(Screen::class, 'screen_id');
    }

    /**
     * Get the console that owns the Station
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function console(): BelongsTo
    {
        return $this->belongsTo(Console::class, 'console_id');
    }

    public function scopeSearch($query, $term)
    {
        # code...
        $term = "%$term%";

        $query->where(function ($query) use ($term) {
            $query->where('name', 'like', $term);
        });
    }

    public static function getBookingModel(): string
    {
        # code...
        return User::class;
    }

    public static function getRateModel(): string
    {
        return Price::class;
    }

    public static function getAvailabilityModel(): string
    {
        # code...
        return Available::class;
    }
}
