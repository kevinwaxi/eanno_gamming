<?php

namespace App\Http\Actions\Update;

use App\Models\Role;
use Illuminate\Http\Request;

class UpdateRoleAction
{
  public function execute(Request $request, Role $role): void
  {
    $role->update([
      'name' => $request->name
    ]);
    $role->syncPermissions($request->input('permissions'));
  }
}
