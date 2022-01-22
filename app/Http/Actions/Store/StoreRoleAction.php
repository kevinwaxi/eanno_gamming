<?php

namespace App\Http\Actions\Store;

use App\Models\Role;
use Illuminate\Http\Request;

class StoreRoleAction
{
  public function execute(Request $request)
  {
    # code...
    $role = new Role([
      'name' => $request->name
    ]);
    $role->givePermissionTo($request->input('permissions'));
    $role->save();
  }
}
