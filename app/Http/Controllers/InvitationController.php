<?php

namespace App\Http\Controllers;

use App\Http\Requests\Store\StoreInvitationRequest;
use App\Models\Invitation;

class InvitationController extends Controller
{

    public function store(StoreInvitationRequest $request)
    {
        $invitation = new Invitation($request->validated());
        $invitation->generateInvitationToken();
        $invitation->save();

        return redirect()
            ->route('requestInvitation')
            ->with('success', 'Invitation to register successfully requested. Please wait for registration link.');
    }

}
