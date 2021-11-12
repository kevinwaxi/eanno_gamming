<?php
namespace App\Http\Actions\Update;

use App\Models\Screen;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class UpdateScreenAction
{
    public function execute(Request $request)
    {
        # code...
        $screen = Screen::where('id', $request->id)->first();

        $screen->update([
            'serial_number' => Str::upper($request->serial_number),
            'condition_id' => $request->condition_id,
            'make_id' => $request->make_id,
            'model_number' => Str::upper($request->model_number),
            'size' => $request->size,
            'feature' => $request->feature,
        ]);
    }
}
