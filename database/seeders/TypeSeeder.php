<?php

namespace Database\Seeders;

use App\Models\Type;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;

class TypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        Type::create(['name' => 'PlayStation 3', 'slug' => Str::slug('PlayStation 3')]);
        Type::create(['name' => 'PlayStation 4', 'slug' => Str::slug('PlayStation 4')]);
        Type::create(['name' => 'PlayStation 5', 'slug' => Str::slug('PlayStation 5')]);
        Type::create(['name' => 'XBox 360', 'slug' => Str::slug('XBox 360')]);
        Type::create(['name' => 'XBox One', 'slug' => Str::slug('XBox One')]);
    }
}
