<?php

namespace App\Http\Requests\Store;

use Illuminate\Foundation\Http\FormRequest;

class StoreStationBookingRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            //
            'station_id' => ['required'],
            'game_id' => ['required'],
            'booking_date' => ['required', 'after_or_equal:now'],
            'start_time' => ['required', 'before:end_time'],
            'end_time' => ['required', 'after:start_time'],
        ];
    }
}
