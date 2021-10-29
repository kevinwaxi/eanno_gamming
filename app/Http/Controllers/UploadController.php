<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UploadController extends Controller
{
    //
    public function upload(Request $request)
    {
        # code...
        if ($request->hasFile('avatar')) {

            $file = $request->file('avatar');
            $filename = $file->getClientOriginalName();
            $folder = uniqid() . '-' . now()->timestamp;
            $file->storeAs('avatars/tmp' . $folder, $filename);

            return $folder;

        }

        return '';
    }
}
