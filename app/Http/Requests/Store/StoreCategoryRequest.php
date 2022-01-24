<?php

namespace App\Http\Requests\Store;

use Illuminate\Support\Str;
use Illuminate\Foundation\Http\FormRequest;

class StoreCategoryRequest extends FormRequest
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
            'name' => ['required', 'unique:categories'],
            'description' => ['required', 'max:100'],
            'cover_photo' => ['required'],
            'color' => ['required'],
        ];
    }

    public function prepareForValidation()
    {
        # code...
        $this->merge([
            'color' => Str::of($this->color)->lower()->__toString()
        ]);
    }
}
