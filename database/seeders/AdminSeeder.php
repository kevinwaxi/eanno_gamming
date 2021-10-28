<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Reset cached roles and permissions
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        // create permissions
        Permission::create(['name' => 'Create Permissions']);
        Permission::create(['name' => 'Read Permissions']);
        Permission::create(['name' => 'Update Permissions']);
        Permission::create(['name' => 'Delete Permissions']);

        // create roles and assign created permissions

        // or may be done by chaining
        $role = Role::create(['name' => 'User'])
            ->givePermissionTo(['Read Permissions', 'Create Permissions', 'Update Permissions']);

        $role = Role::create(['name' => 'Admin']);
        $role->givePermissionTo(Permission::all());
    }
}
