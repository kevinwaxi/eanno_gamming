<?php

namespace App\Http\Requests\Store;

use Illuminate\Foundation\Http\FormRequest;

class StoreInvitationRequest extends FormRequest
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
            'email' => ['required', 'email', 'unique:invitations,email', 'unique:users,email'],
            'phone' => ['required', 'unique:users,phone', 'unique:users,alt_phone', ' unique:invitations'],
        ];
    }

    public function messages()
    {
        return [
            'email.unique' => 'Invitation with this email address already requested or in use.',
            'phone.unique' => 'Invitation with this phone already requested or in use.',
        ];
    }
}
