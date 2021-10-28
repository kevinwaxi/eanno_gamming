<?php

namespace App\Http\Requests\Update;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;

class UpdatePermissionRequest extends FormRequest
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
            'name' => ['required', Rule::unique('permissions')->ignore($this->permission)],
        ];
    }

    public function messages()
    {
        # code...
        return [
            'name.unique' => 'This permission already exists',
            'name.required' => 'Permission name is required',
        ];
    }

    public function prepareForValidation()
    {
        # code...
        $this->merge([
            'name' => Str::of($this->name)->title()->plural()->__toString(),
        ]);
    }
}
