<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Price extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'package_name',
        'price',
        'details',
        'number_of_players',
        'is_available',
        'deleted_at'
    ];

    protected $casts = [
        'is_available' => 'boolean',
    ];

    public function scopeSearch($query, $term)
    {
        # code...
        $term = "%$term%";

        $query->where(function ($query) use ($term) {
            $query->where('package_name', 'like', $term)
                ->orWhere('details', 'like', $term)
                ->orWhere('price', 'like', $term);
        });
    }
}
