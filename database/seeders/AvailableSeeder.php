<?php

namespace Database\Seeders;

use App\Models\Available;
use Illuminate\Database\Seeder;

class AvailableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Available::create(['name' => 'available', 'color' => 'success']);
        Available::create(['name' => 'occupied', 'color' => 'volcano']);
        Available::create(['name' => 'booked', 'color' => 'red']);
        Available::create(['name' => 'in-service', 'color' => 'cyan']);
    }
}
