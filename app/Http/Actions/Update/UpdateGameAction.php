<?php

namespace App\Http\Actions\Update;

use App\Models\CategoryGame;
use App\Models\Game;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class UpdateGameAction
{
    public function execute(Request $request)
    {
        # code...
        $game = Game::where('id', $request->id)
            ->update([
                'name' => $request->name,
                'about_game' => $request->about_game,
                'slug' => Str::slug($request->name),
                'cover_image' => $request->cover_image,
                'release_date' => now(),
                'players' => $request->players,
                'available' => $request->available
            ]);

        $categories = $request->category_id;
        $CategoryGames = [];

        foreach ($categories as $c) {
            array_push($CategoryGames, [
                'category_id' => $c,
                'game_id' => $request->id,
            ]);
        }
        CategoryGame::where('game_id', $request->id)->delete();
        CategoryGame::insert($CategoryGames);
    }
}
