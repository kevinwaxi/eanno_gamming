<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    public function run()
    {
        //developer@admin.com/password
        $this->createUser('developer', 'super-admin');
        $this->createUser('cashier', 'cashier');
        $this->createUser('user', 'user');
    }

    public function createUser($username, $role, $password = 'password')
    {
        $user = User::create([
            'name' => Str::title($username),
            'email' => $username . '@admin.com',
            'username' => $username,
            'phone' => rand(10,12),
            'password' => bcrypt("$password"),
        ]);

        $user->assignRole($role);
    }
}
