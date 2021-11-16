<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PriceResource extends JsonResource
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
            'package' => $this->package_name,
            'price' => $this->price,
            'details' => $this->details,
            'players' => $this->number_of_players,
            'is_available' => $this->is_available,
            'created' => $this->created_at,
            'updated' => $this->updated_at->toFormattedDateSTring(),
            'days' => date_diff(now(), $this->updated_at),
            'station' => $this->station
        ];
    }
}
