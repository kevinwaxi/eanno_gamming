<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Rinvex\Bookings\Models\BookableRate;

class Rates extends BookableRate
{
    protected $table = 'bookable_rates';

}
