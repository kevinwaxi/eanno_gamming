<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Actions\Store\StoreCategoriesAction;
use App\Http\Actions\Update\UpdateCategoryAction;
use App\Http\Controllers\Controller;
use App\Http\Requests\Store\StoreGameCategoryRequest;
use App\Http\Requests\Update\UpdateGameCategoryRequest;
use App\Http\Resources\CategoryResource;
use App\Models\Category;
use Illuminate\Http\Request;

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
            $selected = request('select');
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
                ->paginate($paginate);

            return CategoryResource::collection($category);
        } else {
            $category = Category::all();
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
    public function store(Request $request, StoreCategoriesAction $storeCategoriesAction)
    {
        //
        $storeCategoriesAction->execute($request);
    }

    // upload Cover image first
    public function upload(Request $request)
    {
        #file validate
        $this->validate($request, [
            'file' => 'required|image',
        ]);
        $image_name = time() . '.' . $request->file->extension();
        $request->file->move(public_path('uploads/games/category'), $image_name);
        return $image_name;
    }

    public function deleteImage(Request $request)
    {
        $image_name = $request->image_name;
        $this->deleteFromFolder($image_name);
        return ('deleted');
    }

    public function deleteFromFolder($image_name)
    {
        $image_path = public_path() . $image_name;
        if (file_exists($image_path)) {
            # code...
            @unlink($image_path);
        }
        return;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateGameCategoryRequest $request, $id, UpdateCategoryAction $updateCategoryAction)
    {
        $updateCategoryAction->execute($request);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
