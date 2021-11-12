<?php

namespace Database\Seeders;

use App\Models\Permission;
use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Seeder;

class RolesAndPermissionsSeeder extends Seeder
{

    public function run()
    {
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        $this->call([
            PermissionSeeder::class,
            RoleSeeder::class,
        ]);
    }

}

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        $permissions = [
            'admin',

            'create users',
            'read users',
            'update users',
            'delete users',
            'block users',
            'validate users',
            'access accounts',

            'create roles',
            'read roles',
            'update roles',
            'delete roles',

            'create permissions',
            'read permissions',
            'update permissions',
            'delete permissions',

            'create bookings',
            'validate bookings',
            'cancel bookings',

            'create resources',
            'read resources',
            'update resources',
            'delete resources',
        ];

        foreach ($permissions as $permission) {
            Permission::create(['name' => $permission, 'guard_name' => 'api']);
        }
    }
}

class RoleSeeder extends Seeder
{

    public function run()
    {
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        $roles = [
            'SuperAdmin',
            'Cashier',
            'Gamer',
        ];

        foreach ($roles as $role) {
            $addedRole = Role::create(['name' => $role, 'guard_name' => 'api']);

            switch ($role) {
                case 'SuperAdmin':
                    $addedRole->givePermissionTo(Permission::all());

                    $user = User::where('name', 'superadmin')->first();
                    if ($user) {
                        $user->assignRole(['SuperAdmin']);
                    }
                    break;
                default:
                    $addedRole->givePermissionTo(['admin']);
                    break;
            }
        }
    }
}
