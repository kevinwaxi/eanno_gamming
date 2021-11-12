<?php

namespace App\Http\Requests\Update;

use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class UpdateScreenRequest extends FormRequest
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
            'serial_number' => ['required', Rule::unique('screens')->ignore($this->id)],
            'condition_id' => ['required'],
            'make_id' => ['required'],
            'model_number' => ['required'],
            'size' => ['required', 'numeric', 'between:24,108'],
            'feature' => ['required'],
        ];
    }
}
