<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CheckBanned
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        if (auth()->check() && auth()->user()->banned_until && now()->lessThan(auth()->user()->banned_until)) {
            $banned_days = now()->diffInDays(auth()->user()->banned_until);
            Auth::logout();

            if ($banned_days > 14) {
                $message = 'Seems like your account has been suspended. Please contact administrator.';
            } else {
                $message = 'Seems like your account has been suspended for ' . $banned_days . ' ' . Str::plural('day', $banned_days) . '. Please contact administrator.';
            }

            return redirect()->route('login')->withMessage($message);
        }
        return $next($request);
    }
}
