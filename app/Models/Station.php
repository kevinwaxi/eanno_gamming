<?php

namespace App\Models;

use App\Casts\TitleCast;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Rinvex\Bookings\Traits\Bookable;

class Station extends Model
{
    use HasFactory, Bookable;

    protected $fillable = [
        'name',
        'console_id',
        'screen_id',
        'unit_cost',
        'base_cost',
    ];

    protected $casts = [
        'name' => TitleCast::class,
        'screen_id' => 'integer',
        'console_id' => 'integer',
        'unit_cost' => 'decimal',
        'base_cost' => 'decimal'
    ];


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
        return App\Booking::class;
    }

    public static function getRateModel(): string
    {
        # code...
        return Rates::class;
    }

    public static function getAvailabilityModel(): string
    {
        # code...
        return Available::class;
    }
}
