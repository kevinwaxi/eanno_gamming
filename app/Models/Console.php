<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Console extends Model
{
    use HasFactory;

    protected $fillable = [
        'serial_number',
        'type',
        'gen',
        'storage',
        'storage_size',
        'condition_id',
    ];

    /**
     * Get the condition associated with the Console
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function condition(): HasOne
    {
        return $this->hasOne(Condition::class);
    }

    /**
     * Get the station that owns the Console
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
                ->orWhere('type', 'like', $term)
                ->orWhere('gen', 'like', $term)
                ->orWhere('storage_type', 'like', $term)
                ->orWhere('storage_size', 'like', $term)
                ->orWhereHas('station', function ($query) use ($term) {
                    $query->where('name', 'like', $term);
                })
                ->orWhereHas('condition', function ($query) use ($term) {
                    $query->where('condition', 'like', $term)
                        ->orWhere('slug', 'like', $term);
                });
        });
    }
}
