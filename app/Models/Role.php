<?php

namespace App\Models;

use Spatie\Permission\Models\Role as ModelsRole;

class Role extends ModelsRole
{
    public function scopeSearch($query, $term)
    {
        # code...
        $term = "%$term%";

        $query->where(function ($query) use ($term) {
            $query->where('name', 'like', $term)
                ->orWhere('guard_name', 'like', $term)
                ->orWhereHas('permissions', function ($query) use ($term) {
                    $query->where('name', 'like', $term)
                        ->orWhere('guard_name', 'like', $term);
                });
        });
    }
}
