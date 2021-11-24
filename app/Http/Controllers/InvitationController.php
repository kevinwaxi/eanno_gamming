<?php

namespace App\Http\Controllers;

use App\Http\Requests\Store\StoreInvitationRequest;
use App\Http\Resources\InvitationResource;
use App\Models\Invitation;
use App\Models\User;
use App\Notifications\InvitationNotification;
use App\Notifications\UserRequestNotification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Notification;

class InvitationController extends Controller
{

    public function index(Request $request)
    {
        # code...
        //
        // if the invitation querried has some request in it PAGINATION else get all invitations
        // in the scenario that i want to have then in a list without pagination
        if ($request->total) {
            $paginate = $request->total;
            $search_term = request('q', '');
            $selected = request('select');
            $sort_direction = request('sort_direction', 'desc');
            $sort_field = request('sort_field', 'created_at');

            if (!in_array($sort_direction, ['asc', 'desc'])) {
                $sort_direction = 'desc';
            }
            if (!in_array($sort_field, ['email', 'created_at'])) {
                $sort_field = 'created_at';
            }

            $invitation = Invitation::when($selected, function ($query) use ($selected) {
                $query->where('status', $selected);
            })
                ->search(trim($search_term))
                ->orderBy($sort_field, $sort_direction)
                ->paginate($paginate);

            return InvitationResource::collection($invitation);
        } else {
            $invitation = Invitation::all();
            # code...
            return InvitationResource::collection($invitation);
        }
    }

    public function store(StoreInvitationRequest $request)
    {
        $invitation = new Invitation($request->validated());
        $invitation->generateInvitationToken();
        $invitation->save();

        $admin = User::role('SuperAdmin', 'api')->get();

        Notification::send($admin, new UserRequestNotification($invitation));

        return redirect()
            ->route('requestInvitation')
            ->with('success', 'Invitation to register successfully requested. Please wait for registration link.');
    }

    public function approve(Request $request, $id)
    {
        # code...
        $data = Invitation::where('id', $id)->get();
        $token = Invitation::where('id', $id)->first('invitation_token')->invitation_token;
        $invitationData = [
            'name' => 'Invitation Link',
            'body' => 'Your request to join Eanno Gaming Arcade has been approved. Use the link below to get started',
            'thanks' => 'Thank you for your patience',
            'text' => 'Use this link',
            'url' => url(urldecode(route('register') . '?invitation_token=' . $token)),
        ];

        Notification::send($data, new InvitationNotification($invitationData));

        $invitation = Invitation::where('id', $id)->update([
            'status' => 'Sent',
        ]);

        return $invitation;
    }

    public function pending()
    {
        # code...
        return Invitation::where('status', 'Pending')->get();
    }

}
