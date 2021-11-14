<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class StationResource extends JsonResource
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
            'id' => $this->id,
            'name' => $this->name,
            'screen' => $this->screen,
            'console' => $this->console,
            'screen_condition' => $this->screen->condition,
            'screen_make' => $this->screen->make,
            'console_condition' => $this->console->condition,
            'available' => $this->available,
        ];
    }
}
