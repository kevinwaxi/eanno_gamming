<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\V1\AccountController;
use App\Http\Controllers\API\V1\BookingController;
use App\Http\Controllers\API\V1\Admin\GameController;
use App\Http\Controllers\API\V1\Admin\RoleController;
use App\Http\Controllers\API\V1\Admin\AdminController;
use App\Http\Controllers\API\V1\Admin\GamerController;
use App\Http\Controllers\API\V1\Admin\ScreenController;
use App\Http\Controllers\API\V1\Admin\CashierController;
use App\Http\Controllers\API\V1\Admin\ConsoleController;
use App\Http\Controllers\API\V1\Admin\CategoryController;
use App\Http\Controllers\API\V1\Admin\InvitationController;
use App\Http\Controllers\API\V1\Admin\PermissionController;

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
    // admin routes
    Route::prefix('admin')->group(function () {
        Route::group(['prefix' => 'settings'], function () {
            Route::prefix('security')->group(function () {
                Route::apiResource('roles', RoleController::class);
                Route::apiResource('permissions', PermissionController::class);
            });
            Route::group(['prefix' => 'inventories'], function () {
                Route::apiResource('screens', ScreenController::class);
                Route::apiResource('consoles', ConsoleController::class);
                Route::apiResource('categories', CategoryController::class);
                Route::apiResource('games', GameController::class);
                Route::apiResource('stations', StationController::class);
            });
            Route::group(['prefix' => 'users'], function () {
                Route::apiResource('administrators', AdminController::class);
                Route::apiResource('gamers', GamerController::class);
                Route::apiResource('cashiers', CashierController::class);
                Route::apiResource('invitations', InvitationController::class);
            });
        });
    });
    // users routes
    Route::prefix('gamers')->group(function () {
        // Route::apiResource('bookings', BookingController::class);
        Route::apiResource('games', GameController::class);
    });
    Route::apiResource('accounts', AccountController::class);
});
