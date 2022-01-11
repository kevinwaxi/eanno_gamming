<?php

namespace App\Models;

use Rinvex\Bookings\Traits\Bookable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

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

    /**
     * Get the status associated with the Station
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function status(): BelongsToMany
    {
        return $this->belongsToMany(Status::class,'station_status');
    }

    public function getBookingModel()
    {
        # code...
        return User::class;
    }

    public function getRateModel()
    {
        # code...
        return Price::class;
    }

    public function getAvailabilityModel()
    {
        # code...
        return Available::class;
    }
}
