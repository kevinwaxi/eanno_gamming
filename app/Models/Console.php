<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Console extends Model
{
    use HasFactory;

    protected $fillable = [
        'serial_number',
        'type_id',
        'storage',
        'storage_size',
        'condition_id',
    ];

    /**
     * Get the type that owns the Console
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function type(): BelongsTo
    {
        return $this->belongsTo(Type::class, 'type_id');
    }

    /**
     * Get the condition associated with the Console
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function condition(): BelongsTo
    {
        return $this->belongsTo(Condition::class, 'condition_id', );
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
                ->orWhere('storage', 'like', $term)
                ->orWhere('storage_size', 'like', $term)
                ->orWhereHas('type', function ($query) use ($term) {
                    $query->where('name', 'like', $term)
                        ->orWhere('slug', 'like', $term);
                });
        });
    }

    public function getNewConsoleAttribute()
    {
        # code...
        return $this->condition->where('slug', 'new')->count();
    }
}
