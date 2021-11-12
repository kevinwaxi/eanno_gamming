<?php
namespace App\Http\Actions\Store;

use App\Models\Screen;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class StoreScreenAction
{
    public function execute(Request $request)
    {
        # code...
        $screen = Screen::create([
            'serial_number' => Str::upper($request->serial_number),
            'condition_id' => $request->condition_id,
            'make_id' => $request->make_id,
            'model_number' => Str::upper($request->model_number),
            'size' => $request->size,
            'feature' => $request->feature,
        ]);
    }
}
