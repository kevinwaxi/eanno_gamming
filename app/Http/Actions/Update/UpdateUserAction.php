<?php

namespace App\Http\Actions\Update;

use App\Models\User;
use Illuminate\Http\Request;


class UpdateUserAction
{
  public function execute(Request $request, User $user): void
  {
    $user->update([
      'password' => $request->password
    ]);
  }
}
