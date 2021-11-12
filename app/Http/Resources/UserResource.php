<?php

namespace App\Http\Resources;

use Creativeorange\Gravatar\Facades\Gravatar;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id'=> $this->id,
            'name' => $this->name,
            'username' => $this->username,
            'roles' => $this->roles,
            'email' => $this->email,
            'phone' => $this->phone,
            'avatar' => Gravatar::get($this->email),
            'initials' => $this->initial_pic,
            'active' => $this->is_active,
            'banned_until' => $this->banned_until,
            'created_at' => $this->created_at,
        ];
    }
}
