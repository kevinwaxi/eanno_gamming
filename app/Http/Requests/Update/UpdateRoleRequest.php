<?php

namespace App\Http\Requests\Update;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;

class UpdateRoleRequest extends FormRequest
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
            'name' => ['required', Rule::unique('roles')->ignore($this->role)],
            'permissions' => ['required'],
        ];
    }

    public function prepareForValidation()
    {
        # code...
        $this->merge([
            'name' => Str::of($this->name)->title()->singular->__toString(),
        ]);
    }

    public function messages()
    {
        # code...
        return [
            'name.required' => 'Role name cannot be empty',
            'name.unique' => 'Role name seems to be in use',
            'permissions.required' => 'Please attach permissions to this role',
        ];
    }
}
