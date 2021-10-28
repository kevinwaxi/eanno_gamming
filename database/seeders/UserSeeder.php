<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'kevin wakhisi maraka',
            'username' => 'kevinwakhisi',
            'email' => 'admin@admin.com',
            'phone' => '07005007723',
            'password' => Hash::make('password'),
            'is_active' => true,
        ]);
    }
}
