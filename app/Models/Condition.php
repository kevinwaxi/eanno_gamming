<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Condition extends Model
{

    protected $guarded = [];

    /**
     * Get all of the consoles for the Condition
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function consoles(): HasMany
    {
        return $this->hasMany(Console::class);
    }
}
