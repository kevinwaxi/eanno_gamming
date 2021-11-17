<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class BookingResource extends JsonResource
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
            'start' => $this->start_time,
            'end' => $this->end_time,
            'date' => Carbon::parse($this->booking_date)->format('d-m-Y'),
            'station' => $this->station,
            'user' => $this->user
        ];
    }
}
