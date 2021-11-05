<?php
namespace App\Http\Actions\Update;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class UpdateCategoryAction
{
    public function execute(Request $request)
    {
        $category = Category::where('id', $request->id);
        $category->update([
            'name' => $request->name,
            'description' => $request->description,
            'slug' => Str::slug($request->name),
            'cover_photo' => $request->cover_photo,
        ]);
    }
}
