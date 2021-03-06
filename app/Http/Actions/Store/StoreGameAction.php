<?php

namespace App\Http\Actions\Store;

use App\Models\CategoryGame;
use App\Models\Game;
use App\Models\GameType;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class StoreGameAction
{
    public function execute(Request $request)
    {
        # code...
        $game = Game::create([
            'name' => $request->name,
            'about_game' => $request->about_game,
            'slug' => Str::slug($request->name),
            'cover_image' => $request->cover_image,
            'release_date' => $request->release_date,
            'players' => $request->players,
            'available' => $request->available
        ]);
        // insert game category
        $categories = $request->category_id;
        $CategoryGames = [];
        foreach ($categories as $c) {
            array_push($CategoryGames, [
                'category_id' => $c,
                'game_id' => $game->id,
            ]);
        }
        CategoryGame::insert($CategoryGames);

        // insert game types
        $types = $request->type_id;
        $GameType = [];
        foreach ($types as $t) {
            array_push($GameType, [
                'type_id' => $t,
                'game_id' => $game->id,
            ]);
        }
        GameType::insert($GameType);
    }
}
