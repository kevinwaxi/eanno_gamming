<?php
namespace App\Http\Actions\Update;

use App\Models\Console;
use Illuminate\Http\Request;

class UpdateConsoleAction
{
    public function execute(Request $request)
    {
        # code...
        $console = Console::where('id', $request->id)->first();
        $console->update([
            'serial_number' => $request->serial_number,
            'type' => $request->type,
            'gen' => $request->gen,
            'storage' => $request->storage,
            'storage_size' => $request->storage_size,
            'condition_id' => $request->condition_id,
        ]);
    }
}
