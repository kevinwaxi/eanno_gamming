<?php
namespace App\Http\Actions\Store;

use App\Models\Console;
use Illuminate\Http\Request;

class StoreConsoleAction
{
    public function execute(Request $request)
    {
        # code...
        $console = Console::create([
            'serial_number' => $request->serial_number,
            'type' => $request->type,
            'gen' => $request->gen,
            'storage' => $request->storage,
            'storage_size' => $request->storage_size,
            'condition_id' => $request->condition_id,
        ]);
    }
}
