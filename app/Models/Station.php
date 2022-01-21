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
        'screen_id'
    ];

    protected $casts = [
        'name' => TitleCast::class,
        'screen_id' => 'integer',
        'console_id' => 'integer',
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

    public function getBookingModel()
    {
        # code...
        return User::class;
    }

    public function getRateModel()
    {
        # code...
        return Rates::class;
    }

    public function getAvailabilityModel()
    {
        # code...
        return Available::class;
    }
}
