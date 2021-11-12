<?php

namespace App\Http\Requests\Update;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateConsoleRequest extends FormRequest
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
            'serial_number' => ['required', Rule::unique('consoles')->ignore($this->id)],
            'type' => ['required'],
            'gen' => ['required'],
            'storage' => ['required'],
            'storage_size' => ['required'],
            'condition_id' => ['required'],
        ];
    }

    public function messages()
    {
        # code...
        return [
            'condition_id.required' => 'Please define the status condition of the console',
            'serial_number.required' => 'Please define the serial number this console',
            'gen.required' => 'Please define the generation ',
        ];
    }
}
