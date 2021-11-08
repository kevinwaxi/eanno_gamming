<?php
namespace App\Http\Actions\Store;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class StoreCategoriesAction
{
    public function execute(Request $request)
    {
        Category::create([
            'name' => $request->name,
            'description' => $request->description,
            'slug' => Str::slug($request->name),
            'cover_photo' => $request->cover_photo,
            'color' => $request->color
        ]);
    }
}
