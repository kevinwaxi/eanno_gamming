<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Condition extends Model
{

    protected $guarded = [];

    /**
     * Get the console that owns the Condition
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function console(): BelongsTo
    {
        return $this->belongsTo(Console::class);
    }
}
