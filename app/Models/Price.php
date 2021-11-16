<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Price extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'package_name',
        'price',
        'details',
        'number_of_players',
        'is_available',
        'deleted_at',
    ];

    protected $casts = [
        'is_available' => 'boolean',
    ];

    public function scopeSearch($query, $term)
    {
        # code...
        $term = "%$term%";

        $query->where(function ($query) use ($term) {
            $query->where('number_of_players', 'like', $term)
                ->orWhere('details', 'like', $term)
                ->orWhere('price', 'like', $term);
        });
    }

    /**
     * The station that belong to the Price
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function station(): BelongsToMany
    {
        return $this->belongsToMany(Station::class,'price_stations');
    }
}
