<?php

namespace App\Models;

use App\Casts\TitleCast;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Game extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'slug',
        'cover_image',
        'about_game',
        'players',
        'release_date',
    ];

    protected $casts = [
        'name' => TitleCast::class,
        'release_date' => 'datetime',
    ];

    /**
     * The categories that belong to the Game
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function categories(): BelongsToMany
    {
        return $this->belongsToMany(Category::class, 'category_games');
    }

    /**
     * The types that belong to the Game
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function types(): BelongsToMany
    {
        return $this->belongsToMany(Type::class, 'game_types');
    }
}
