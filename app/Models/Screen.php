<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Screen extends Model
{
    use HasFactory;

    protected $guarded = [];

    /**
     * Get the condition that owns the Screen
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function condition(): BelongsTo
    {
        return $this->belongsTo(Condition::class, 'condition_id');
    }

    /**
     * Get the make that owns the Screen
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function make(): BelongsTo
    {
        return $this->belongsTo(Make::class, 'make_id');
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
