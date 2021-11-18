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
        $start_time = new Carbon($this->start_time);
        $end_time = new Carbon($this->end_time);
        $total = $end_time->diff($start_time);

        return [
            'id' => $this->id,
            'start' => $this->start_time,
            'end' => $this->end_time,
            'date' => Carbon::parse($this->booking_date)->format('d-m-Y'),
            'user' => $this->user,
            'time' => $total,
        ];
    }
}
