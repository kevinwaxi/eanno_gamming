<?php

namespace App\Http\Requests\Update;

use Illuminate\Support\Str;
use Illuminate\Foundation\Http\FormRequest;

class UpdateGameRequest extends FormRequest
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
            'release_date' => ['required', 'date'],
            'cover_image' => ['required'],
            'about_game' => ['required', 'min:50'],
            'players' => ['required', 'numeric', 'digits_between:1,6'],
            'category_id' => ['required'],
        ];
    }

    public function prepareForValidation()
    {
        # code...
        $this->merge([
            'name' => Str::of($this->name)->title()->__toString(),
        ]);
    }
}
