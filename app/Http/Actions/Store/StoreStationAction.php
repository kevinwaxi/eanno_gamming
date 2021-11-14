<?php
namespace App\Http\Actions\Store;

use App\Models\Station;
use Illuminate\Http\Request;

class StoreStationAction
{
    public function execute(Request $request)
    {
        # code...
        Station::create([
            'name' => $request->name,
            'console_id' => $request->console_id,
            'screen_id' => $request->screen_id,
            'available_id' => $request->available_id,
        ]);
    }
}
