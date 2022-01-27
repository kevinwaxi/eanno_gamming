<?php

namespace App\Models;

use App\Casts\TitleCast;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Station extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'console_id',
        'screen_id',
        'unit_cost',
        'base_cost',
        'price'
    ];

    protected $casts = [
        'name' => TitleCast::class,
        'screen_id' => 'integer',
        'console_id' => 'integer',
        'unit_cost' => 'decimal',
        'base_cost' => 'decimal',
        'price' => 'string'
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

    /**
     * Get all of the bookings for the Station
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function bookings(): HasMany
    {
        return $this->hasMany(Booking::class);
    }

    public function scopeSearch($query, $term)
    {
        # code...
        $term = "%$term%";

        $query->where(function ($query) use ($term) {
            $query->where('name', 'like', $term);
        });
    }
}
