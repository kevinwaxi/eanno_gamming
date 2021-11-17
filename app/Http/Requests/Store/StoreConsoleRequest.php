<?php

namespace App\Http\Requests\Store;

use Illuminate\Support\Str;
use Illuminate\Foundation\Http\FormRequest;

class StoreConsoleRequest extends FormRequest
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
            'serial_number' => ['required', 'unique:consoles,serial_number'],
            'storage' => ['required'],
            'storage_size' => ['required'],
            'condition_id' => ['required'],
            'type_id' => ['required'],
        ];
    }

    public function messages()
    {
        # code...
        return [
            'condition_id.required' => 'Please define the status condition of the console',
            'type_id.required' => 'Please select the console type',
            'serial_number.required' => 'Please define the serial number this console',
        ];
    }

    public function prepareForValidation()
    {
        # code...
        $this->merge([
            'serial_number' => Str::of($this->serial_number)->upper()->__toString(),
        ]);
    }
}
