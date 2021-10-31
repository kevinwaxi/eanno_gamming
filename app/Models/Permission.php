<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class Permission extends \Spatie\Permission\Models\Permission
{
    use HasFactory;#

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
}
