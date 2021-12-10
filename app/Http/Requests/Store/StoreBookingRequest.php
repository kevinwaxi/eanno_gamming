<?php

namespace App\Http\Requests\Store;

use Illuminate\Foundation\Http\FormRequest;

class StoreBookingRequest extends FormRequest
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
            'game_id' => ['required'],
            'start_time' => ['required'],
            'end_time' => ['required', 'after:start_time'],
            'booking_date' => ['required']
        ];
    }

    public function messages()
    {
        # code...
        return [
            'game_id.required' => 'Please select a game',
            'start_time.required' => 'Please select start time',
            'end_time.required' => 'Please select end time',
            'end_time.after' => 'End time should be after start time'
        ];
    }
}
