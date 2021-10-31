<?php

namespace App\Http\Requests\Store;

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
        ];
    }
}
