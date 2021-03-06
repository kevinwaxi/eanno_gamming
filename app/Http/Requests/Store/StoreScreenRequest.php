<?php

namespace App\Http\Requests\Store;

use Illuminate\Support\Str;
use Illuminate\Foundation\Http\FormRequest;

class StoreScreenRequest extends FormRequest
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
            'serial_number' => ['required', 'unique:screens'],
            'condition_id' => ['required'],
            'make_id' => ['required'],
            'model_number' => ['required'],
            'size' => ['required', 'numeric', 'between:24,108'],
            'feature' => ['required'],
        ];
    }

    public function prepareForValidation()
    {
        # code...
        $this->merge([
            'serial_number' => Str::of($this->serial_number)->upper()->__toString(),
            'model_number' => Str::of($this->model_number)->upper()->__toString(),
        ]);
    }
}
