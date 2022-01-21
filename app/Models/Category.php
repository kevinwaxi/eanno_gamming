<?php

namespace App\Models;

use App\Casts\TitleCast;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Category extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'slug',
        'description',
        'cover_photo',
        'color',
    ];

    protected $casts = [
        'name' => TitleCast::class
    ];

    public function scopeSearch($query, $term)
    {
        # code...
        $term = "%$term%";

        $query->where(function ($query) use ($term) {
            $query->where('name', 'like', $term)
                ->orWhere('description', 'like', $term)
                ->orWhere('slug', 'like', $term);
        });
    }

    /**
     * The game that belong to the Category
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function games(): BelongsToMany
    {
        return $this->belongsToMany(Game::class, 'category_games', 'category_id', 'game_id');
    }
}
