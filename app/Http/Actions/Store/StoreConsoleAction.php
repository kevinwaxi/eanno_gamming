<?php

namespace App\Http\Actions\Store;

use App\Models\Console;
use Illuminate\Support\Str;
use Illuminate\Http\Request;

class StoreConsoleAction
{
    public function execute(Request $request)
    {
        # code...
        Console::create([
            'serial_number' => Str::upper($request->serial_number),
            'type_id' => $request->type_id,
            'storage' => $request->storage,
            'storage_size' => $request->storage_size,
            'condition_id' => $request->condition_id,
        ]);
    }
}
