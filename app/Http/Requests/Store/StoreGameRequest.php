<?php

namespace App\Http\Requests\Store;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Str;

class StoreGameRequest extends FormRequest
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
            'name' => ['required', 'unique:games,name'],
            'release_date' => ['required', 'date'],
            'cover_image' => ['required'],
            'about_game' => ['required', 'min:20'],
            'players' => ['required', 'numeric', 'digits_between:1,6'],
            'category_id' => ['required'],
            'type_id' => ['required']
        ];
    }
}
