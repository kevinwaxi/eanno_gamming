<?php

namespace Database\Seeders;

use App\Models\Condition;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class ConditionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Condition::create(['name' => 'New', 'color' => 'success', 'slug' => Str::slug('new')]);
        Condition::create(['name' => 'Refurbished', 'color' => 'blue', 'slug' => Str::slug('Refurbished')]);
        Condition::create(['name' => 'Second Hand', 'color' => 'magenta', 'slug' => Str::slug('Second Hand')]);
        Condition::create(['name' => 'Damaged', 'color' => 'warning', 'slug' => Str::slug('Damaged')]);
        Condition::create(['name' => 'Software Upgrade', 'color' => 'geekblue', 'slug' => Str::slug('Software Upgrade')]);
        Condition::create(['name' => 'Totalled', 'color' => 'error', 'slug' => Str::slug('Totalled')]);
    }
}
