<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Invitation;
use App\Models\User;
use App\Notifications\WelcomeUserNotification;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Notification;
use Illuminate\Support\Facades\Validator;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
     */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users', 'exists:invitations,email'],
            'phone' => ['required', 'regex:/^([0-9\s\-\+\(\)]*)$/', 'min:10', 'unique:users', 'exists:invitations,phone'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\Models\User
     */
    protected function create(array $data)
    {

        // invitations check
        $invitation = Invitation::where('email', $data['email'])
            ->where('phone', $data['phone'])
            ->firstOrFail();

        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'username' => $data['username'],
            'phone' => $data['phone'],
            'password' => Hash::make($data['password']),
        ]);
        $invitation->registered_at = $user->created_at;
        $invitation->status = ('Registered');
        $invitation->save();

        Notification::send($user, new WelcomeUserNotification($user));
    }

    public function requestInvitation()
    {
        # code...
        return view('auth.request');
    }

    /**
     * Override the application registration form. Get the email that has been associated with the invitation and
     * pass it to the view.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function showRegistrationForm(Request $request)
    {
        $invitation_token = $request->get('invitation_token');
        $invitation = Invitation::where('invitation_token', $invitation_token)->firstOrFail();
        $email = $invitation->email;
        $phone = $invitation->phone;

        return view('auth.register', compact(['email', 'phone']));
    }

    /**
     * After user registered, update the invitation registered_at.
     *
     * @param $user
     */
    public function registered($user)
    {
        $invitation = Invitation::where('email', $user->email)->firstOrFail();
        $invitation->registered_at = $user->created_at;
        $invitation->save();
    }

}
