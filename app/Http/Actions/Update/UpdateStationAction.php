<?php

namespace App\Http\Actions\Update;

use App\Models\Station;
use Illuminate\Http\Request;

class UpdateStationAction
{
  public function execute(Request $request, Station $station): void
  {
    $station->update([
      'name' => $request->name,
      'console_id' => $request->console_id,
      'screen_id' => $request->screen_id,
    ]);
  }
}
