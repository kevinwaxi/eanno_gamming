<?php

namespace App\Http\Requests\Store;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Str;

class StorePriceRequest extends FormRequest
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
            'price' => ['required', 'numeric', 'between:100,300'],
            'details' => ['string', 'max:100'],
            'number_of_players' => ['required', 'numeric', 'digits_between:1,5'],
            'is_available' => ['boolean'],
        ];
    }

    public function prepareForValidation()
    {

    }

    public function messages()
    {
        # code...
        return [
            'package_name.min' => 'Package name is too short',
            'details.required' => 'Package price cannot be empty',
        ];
    }
}
