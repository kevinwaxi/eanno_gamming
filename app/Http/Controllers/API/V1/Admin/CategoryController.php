<?php

namespace App\Http\Controllers\API\V1\Admin;

use App\Http\Actions\Store\StoreCategoriesAction;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Store\StoreCategoryRequest;
use App\Http\Requests\Update\UpdateCategoryRequest;
use App\Http\Resources\CategoryResource;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //
        if ($request->total) {
            $paginate = $request->total;
            $search_term = request('q', '');
            $sort_direction = request('sort_direction', 'desc');
            $sort_field = request('sort_field', 'created_at');

            if (!in_array($sort_direction, ['asc', 'desc'])) {
                $sort_direction = 'desc';
            }
            if (!in_array($sort_field, ['name', 'created_at'])) {
                $sort_field = 'created_at';
            }

            $category = Category::search(trim($search_term))
                ->orderBy($sort_field, $sort_direction)
                ->with('games')
                ->paginate($paginate);

            return CategoryResource::collection($category);
        } else {
            $category = Category::with('games')->get();
            # code...
            return CategoryResource::collection($category);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreCategoryRequest $request, StoreCategoriesAction $action)
    {
        //
        $action->execute($request);

        return new CategoryResource(Category::all());
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function show(Category $category)
    {
        //

        return new CategoryResource($category);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateCategoryRequest $request, Category $category)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy(Category $category)
    {
        //
        $category->delete();

        return response()->noContent();
    }

    public function uploadCategoryImage(Request $request)
    {
        #file validate
        $this->validate($request, [
            'file' => 'required|image',
        ]);
        $image_name = time() . '.' . $request->file->extension();
        $request->file->move(public_path('uploads/games/category'), $image_name);
        return $image_name;
    }

    public function deleteCategoryImage(Request $request)
    {
        $image_name = $request->image_name;
        $this->deleteFromFolder($image_name);
        return ('deleted');
    }

    private function deleteFromFolder($image_name)
    {
        $image_path = public_path() . $image_name;
        if (file_exists($image_path)) {
            # code...
            @unlink($image_path);
        }
        return;
    }
}
