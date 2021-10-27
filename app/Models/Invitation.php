<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Invitation extends Model
{
    use HasFactory;

    protected $fillable = [
        'email',
        'phone',
        'invitation_token',
        'registered_at',
    ];

    public function generateInvitationToken()
    {
        $this->invitation_token = substr(md5(rand(0, 9) . $this->email . time()), 0, 32);
    }
}
