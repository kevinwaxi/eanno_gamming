<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Rinvex\Bookings\Models\BookableAvailability;

class Available extends BookableAvailability
{
    use HasFactory;

    protected $table = 'bookable_availabilities';

}
