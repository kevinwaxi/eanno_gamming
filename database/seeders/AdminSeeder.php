<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        // create permissions
        Permission::create(['name' => 'Create Permissions','guard_name'=>'api']);
        Permission::create(['name' => 'Read Permissions','guard_name'=>'api']);
        Permission::create(['name' => 'Update Permissions','guard_name'=>'api']);
        Permission::create(['name' => 'Delete Permissions','guard_name'=>'api']);

        // create roles and assign created permissions
        $role = Role::create(['name' => 'admin','guard_name'=>'api']);
        $role->givePermissionTo(Permission::all());

        $user = User::create([
            'is_active' => true,
            'name' => 'John Doe Mwogli',
            'phone' => '555-555-5555',
            'email' => 'admin@admin.com',
            'password' => bcrypt('password'),
            'username' => 'admin2001',
        ]);

        $user->assignRole([$role->name]);
    }

}
