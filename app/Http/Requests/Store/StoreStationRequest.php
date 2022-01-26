<?php

namespace App\Http\Requests\Store;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Str;

class StoreStationRequest extends FormRequest
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
            'name' => ['required', 'unique:stations'],
            'console_id' => ['required', 'unique:stations,console_id'],
            'screen_id' => ['required', 'unique:stations,screen_id'],
            'price' => ['required'],
            'base_cost' => ['required'],
            'unit_cost' => ['required'],
        ];
    }

    public function messages()
    {
        # code...
        return [
            'console_id.unique' => 'This console is already in use',
            'console_id.required' => 'Please select console',
            'screen_id.unique' => 'This screen is already in use',
            'screen_id.required' => 'Please select screen',
            'name.unique' => 'This station name is available',
            'name.required' => 'Station name is required',
        ];
    }
}
