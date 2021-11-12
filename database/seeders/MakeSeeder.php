<?php

namespace Database\Seeders;

use App\Models\Make;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class MakeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        Make::create(['name' => 'Samsung', 'color' => 'geekblue', 'slug' => Str::slug('samsung')]);
        Make::create(['name' => 'Hisense', 'color' => 'success', 'slug' => Str::slug('Hisense')]);
        Make::create(['name' => 'Sony', 'color' => 'error', 'slug' => Str::slug('sony')]);
        Make::create(['name' => 'TCL', 'color' => 'volcano', 'slug' => Str::slug('TCL')]);
        Make::create(['name' => 'LG Electronics', 'color' => 'red', 'slug' => Str::slug('LG Electronics')]);
        Make::create(['name' => 'Bang & Olufsen', 'color' => 'warning', 'slug' => Str::slug('Bang & Olufsen')]);
        Make::create(['name' => 'Synix', 'color' => 'primary', 'slug' => Str::slug('Synix')]);
    }
}
