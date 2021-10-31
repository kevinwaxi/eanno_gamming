<?php

namespace App\Http\Requests\Update;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;

class UpdateProfileRequest extends FormRequest
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
            'name' => ['required'],
            'username' => ['required', 'alpha_num', Rule::unique('users')->ignore(auth('api')->user()->id)],
            'phone' => ['required', 'numeric', 'digits_between:10,15', Rule::unique('users')->ignore(auth('api')->user()->id)],
            'email' => ['required', Rule::unique('users')->ignore(auth('api')->user()->id)],
        ];
    }

    public function prepareBeforeValidation()
    {
        # code...
        $this->merge([
            'name' => Str::of($this->name)->title()->trim()->__toString(),
            'username' => Str::lower($this->username),
            'phone' => Str::trim($this->phone),
            'email' => Str::of($this->email)->lower()->__toString(),
        ]);
    }

    public function messages()
    {
        # code...
        return [
            'phone.digits' => 'Phone number should be valid',
        ];
    }
}
