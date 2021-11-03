<?php

namespace App\Http\Requests\Update;

use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class UpdatePriceRequest extends FormRequest
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
            'package_name' => ['required', 'min:3', Rule::unique('prices','package_name')->ignore($this->id)],
            'price' => ['required', 'numeric', 'between:100,300'],
            'details' => ['required', 'max:100'],
            'number_of_players' => ['required', 'numeric', 'digits_between:1,5'],
            'is_available' => ['boolean'],
        ];
    }

    public function prepareForValidation()
    {
        $this->merge([
            'package_name' => Str::of($this->package_name)->lower()->singular()->__toString(),
        ]);
    }

    public function messages()
    {
        # code...
        return [
            'package_name.required' => 'Package name is required',
            'package_name.unique' => 'Package name already exists',
            'package_name.min' => 'Package name is too short',
            'details.required' => 'Package price cannot be empty',
        ];
    }
}
