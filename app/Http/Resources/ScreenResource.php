<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ScreenResource extends JsonResource
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
            'serial_number' => $this->serial_number,
            'model' => $this->model_number,
            'size' => $this->size,
            'feature' => $this->feature,
            'make' => new MakeResource($this->make),
            'condition' => new ConditionResource($this->condition),
        ];
    }
}
