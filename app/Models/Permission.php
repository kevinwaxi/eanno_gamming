<?php

namespace App\Models;

use App\Casts\TitleCast;
use Spatie\Permission\Models\Permission as ModelsPermission;

class Permission extends ModelsPermission
{
    public function scopeSearch($query, $term)
    {
        # code...
        $term = "%$term%";

        $query->where(function ($query) use ($term) {
            $query->where('name', 'like', $term)
                ->orWhere('guard_name', 'like', $term)
                ->orWhereHas('roles', function ($query) use ($term) {
                    $query->where('name', 'like', $term)
                        ->orWhere('guard_name', 'like', $term);
                });
        });
    }

    protected $casts = [
        'name' => TitleCast::class
    ];
}
