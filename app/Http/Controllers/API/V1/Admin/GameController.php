<?php

namespace App\Http\Controllers\API\V1\Admin;

use App\Http\Actions\Store\StoreGameAction;
use App\Http\Controllers\Controller;
use App\Http\Requests\Store\StoreGameRequest;
use App\Http\Resources\GameResource;
use App\Models\Game;
use Illuminate\Http\Request;

class GameController extends Controller
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

            $games = Game::search(trim($search_term))
                ->orderBy($sort_field, $sort_direction)
                ->paginate($paginate);

            return GameResource::collection($games);
        } else {
            $games = Game::get();
            # code...
            return GameResource::collection($games);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreGameRequest $request, StoreGameAction $action)
    {
        //
        $action->execute($request);

        return GameResource::collection(Game::all())->response();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Game  $game
     * @return \Illuminate\Http\Response
     */
    public function show(Game $game)
    {
        //

        return new GameResource($game);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Game  $game
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Game $game)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Game  $game
     * @return \Illuminate\Http\Response
     */
    public function destroy(Game $game)
    {
        //
    }

    public function uploadCategoryImage(Request $request)
    {
        #file validate
        $this->validate($request, [
            'file' => 'required|image',
        ]);
        $image_name = time() . '.' . $request->file->extension();
        $request->file->move(public_path('uploads/games/icons'), $image_name);
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
