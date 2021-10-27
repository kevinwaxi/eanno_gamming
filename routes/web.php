<?php

use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\InvitationController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */

Route::get('/', function () {
    return view('welcome');
});
Auth::routes();

Route::post('invitations', [InvitationController::class, 'store'])->middleware('guest')->name('storeInvitation');
Route::get('register/request', [RegisterController::class, 'requestInvitation'])->name('requestInvitation');

Route::get('register', [RegisterController::class, 'showRegistrationForm'])
    ->name('register')
    ->middleware('hasInvitation');


Route::get('{any}', [HomeController::class, 'index'])->where('any', '[\/\w\.-]*');
