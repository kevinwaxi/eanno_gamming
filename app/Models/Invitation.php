<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Invitation extends Model
{
    use HasFactory, Notifiable;

    protected $fillable = [
        'email',
        'phone',
        'status',
        'invitation_token',
        'registered_at',
    ];

    public function generateInvitationToken()
    {
        $this->invitation_token = substr(md5(rand(0, 9) . $this->email . time()), 0, 32);
    }

    public function getLink()
    {
        return urldecode(route('register') . '?invitation_token=' . $this->invitation_token);
    }

    public function scopeSearch($query, $term)
    {
        # code...
        $term = "%$term%";

        $query->where(function ($query) use ($term) {
            $query->where('email', 'like', $term)
                ->orWhere('phone', 'like', $term);
        });
    }
}
