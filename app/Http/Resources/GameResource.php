<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class GameResource extends JsonResource
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
            'slug' => $this->slug,
            'cover_image' => $this->cover_image,
            'about_game' => $this->about_game,
            'players' => $this->players,
            'release_date' => $this->release_date,
            'categories' => CategoryResource::collection($this->categories),
            'types' => TypeResource::collection($this->types)
        ];
    }
}
