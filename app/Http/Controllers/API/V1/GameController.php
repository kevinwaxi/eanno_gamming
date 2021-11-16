<?php

namespace App\Http\Controllers\API\V1;

use App\Models\Game;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;
use Spatie\QueryBuilder\QueryBuilder;
use App\Http\Actions\Store\StoreGameAction;
use App\Http\Actions\Update\UpdateGameAction;
use App\Http\Requests\Store\StoreGameRequest;
use App\Http\Requests\Update\UpdateGameRequest;

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
        $games = QueryBuilder::for(Game::class)
                ->with(['categories'])
                ->paginate($request->total)
                ->appends($request->query());
        return $games;

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreGameRequest $request, StoreGameAction $storeGameAction)
    {
        $storeGameAction->execute($request);
        return response()->json([
            'msg' => 'Success',
            'status' => JsonResponse::HTTP_CREATED
        ]);
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
    public function update(UpdateGameRequest $request, $id, UpdateGameAction $updateGameAction)
    {
        //
        $updateGameAction->execute($request);

    }

    // upload Cover image first
    public function upload(Request $request)
    {
        #file validate
        $this->validate($request, [
            'file' => 'required|image',
        ]);
        $image_name = time() . '.' . $request->file->extension();
        $request->file->move(public_path('uploads/games/all_games'), $image_name);
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
