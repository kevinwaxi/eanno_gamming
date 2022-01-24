<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Type extends Model
{
    use HasFactory;

    protected $guarded = [];

    /**
     * Get all of the consoles for the Type
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function consoles(): HasMany
    {
        return $this->hasMany(Console::class);
    }
}
