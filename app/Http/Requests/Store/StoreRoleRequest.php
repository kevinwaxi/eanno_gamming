<?php

namespace App\Http\Requests\Store;

use Illuminate\Support\Str;
use Illuminate\Foundation\Http\FormRequest;

class StoreRoleRequest extends FormRequest
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
            'name' => ['required', 'unique:roles'],
            'permissions' => ['required'],
        ];
    }

    public function messages()
    {
        # code...
        return [
            'name.required' => 'Please provide role name',
            'name.unique' => 'There is a role bearing this name'
        ];
    }

    protected function prepareForValidation()
    {
        $this->merge([
            'name' => Str::of($this->name)->title()->__toString()
        ]);
    }
}
