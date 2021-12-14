<?php

use App\Http\Controllers\API\V1\AvailabilityController;
use App\Http\Controllers\API\V1\BookingController;
use App\Http\Controllers\API\V1\CategoryController;
use App\Http\Controllers\API\V1\ConditionController;
use App\Http\Controllers\API\V1\ConsoleController;
use App\Http\Controllers\API\V1\GameController;
use App\Http\Controllers\API\V1\MakeController;
use App\Http\Controllers\API\V1\PermissionsController;
use App\Http\Controllers\API\V1\PriceController;
use App\Http\Controllers\API\V1\RolesController;
use App\Http\Controllers\API\V1\ScreenController;
use App\Http\Controllers\API\V1\StationController;
use App\Http\Controllers\API\V1\TypeController;
use App\Http\Controllers\API\V1\UserController;
use App\Http\Controllers\InvitationController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
 */

Route::prefix('v1')->middleware(['auth:api'])->group(function () {

    Route::post('uploads/avatar', [UserController::class, 'upload']);

    // api/v1/users
    Route::get('users/profile', [UserController::class, 'profile']);
    Route::put('users/profile/update', [UserController::class, 'updateProfile']);
    Route::get('users/banned_users',[UserController::class,'banned']);
    Route::put('users/ban/{id}', [UserController::class, 'ban']);
    Route::put('users/assignRole/{id}', [UserController::class, 'assign']);
    Route::put('users/restore/{id}', [UserController::class, 'restore']);
    Route::get('users/all', [UserController::class, 'allUsers']);
    Route::apiResource('users', UserController::class);
    // api/v1/permissions/
    Route::apiResource('permissions', PermissionsController::class);
    // api/v1/roles/
    Route::apiResource('roles', RolesController::class);
    // api/v1/invitations
    Route::get('invitations/pending', [InvitationController::class, 'pending']);
    Route::apiResource('invitations', InvitationController::class);
    Route::get('invitations/approve/{id}', [InvitationController::class, 'approve']);
    //api/v1/pricing
    Route::apiResource('prices', PriceController::class);
    // api/v1/categories
    Route::post('categories/upload/', [CategoryController::class, 'upload']);
    Route::post('categories/deleteCover', [CategoryController::class, 'deleteImage']);
    Route::apiResource('categories', CategoryController::class);
    //api/v1/games
    Route::post('games/upload/', [GameController::class, 'upload']);
    Route::post('games/deleteCover', [GameController::class, 'deleteImage']);
    Route::apiResource('games', GameController::class);
    // api/v1/bookings
    Route::get('bookings/today',[BookingController::class, 'todaysBookings']);
    Route::get('bookings/mine', [BookingController::class, 'myBookings']);
    Route::patch('bookings/approve/{booking}',[BookingController::class,'approveBooking']);
    Route::apiResource('bookings', BookingController::class);
    // api/v1/condition
    Route::apiResource('conditions', ConditionController::class);
    // api/v1/makes
    Route::apiResource('makes', MakeController::class);
    // api/v1/type
    Route::apiResource('types', TypeController::class);
    // api/v1/consoles
    Route::apiResource('consoles', ConsoleController::class);
    // api/v1/screens
    Route::apiResource('screens', ScreenController::class);
    // api/v1/stations
    Route::apiResource('stations', StationController::class);
    // api/v1/availability
    Route::apiResource('availability', AvailabilityController::class);
});
