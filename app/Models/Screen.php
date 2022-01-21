<?php

namespace App\Models;

use App\Casts\TitleCast;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Screen extends Model
{
    use HasFactory;

    protected $fillable = [
        'serial_number',
        'condition_id',
        'make_id',
        'model_number',
        'size',
        'feature',
    ];

    protected $casts = [
        'serial_number' => 'integer',
        'condition_id' => 'integer',
        'make_id' => 'integer',
        'model_number' => TitleCast::class,
        'size' => 'integer',

    ];

    /**
     * Get the condition that owns the Screen
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function condition(): BelongsTo
    {
        return $this->belongsTo(Condition::class);
    }

    /**
     * Get the make that owns the Screen
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function make(): BelongsTo
    {
        return $this->belongsTo(Make::class);
    }

    /**
     * Get the station that owns the Screen
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function station(): BelongsTo
    {
        return $this->belongsTo(Station::class);
    }

    public function scopeSearch($query, $term)
    {
        # code...
        $term = "%$term%";

        $query->where(function ($query) use ($term) {
            $query->where('serial_number', 'like', $term)
                ->orWhere('size', 'like', $term)
                ->orWhere('feature', 'like', $term);
        });
    }
}
