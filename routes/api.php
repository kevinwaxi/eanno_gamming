<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\V1\AccountController;
use App\Http\Controllers\API\V1\BookingController;
use App\Http\Controllers\API\V1\Admin\GameController;
use App\Http\Controllers\API\V1\Admin\MakeController;
use App\Http\Controllers\API\V1\Admin\RoleController;
use App\Http\Controllers\API\V1\Admin\TypeController;
use App\Http\Controllers\API\V1\Admin\AdminController;
use App\Http\Controllers\API\V1\Admin\GamerController;
use App\Http\Controllers\API\V1\Admin\ScreenController;
use App\Http\Controllers\API\V1\Admin\CashierController;
use App\Http\Controllers\API\V1\Admin\ConsoleController;
use App\Http\Controllers\API\V1\Admin\StationController;
use App\Http\Controllers\API\V1\Admin\CategoryController;
use App\Http\Controllers\API\V1\Admin\ConditionController;
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
    Route::apiResource('accounts', AccountController::class);
    // admin routes
    Route::prefix('admin')->group(function () {
        Route::group(['prefix' => 'settings'], function () {
            Route::prefix('security')->group(function () {
                Route::apiResource('roles', RoleController::class);
                Route::apiResource('permissions', PermissionController::class);
            });
            Route::group(['prefix' => 'inventories'], function () {
                Route::group(['prefix' => 'misc'], function () {
                    Route::get('conditions', [ConditionController::class, 'index']);
                    Route::get('types', [TypeController::class, 'index']);
                    Route::get('makes', [MakeController::class, 'index']);
                });
                Route::group(['prefix' => 'categories'], function () {
                    Route::post('upload', [CategoryController::class, 'uploadCategoryImage']);
                    Route::post('deleteFile', [CategoryController::class, 'deleteCategoryImage']);
                });
                Route::apiResource('categories', CategoryController::class);
                Route::apiResource('consoles', ConsoleController::class);
                Route::group(['prefix' => 'games'], function () {
                    Route::post('upload', [GameController::class, 'uploadCategoryImage']);
                    Route::post('deleteFile', [GameController::class, 'deleteCategoryImage']);
                });
                Route::apiResource('games', GameController::class);
                Route::apiResource('screens', ScreenController::class);
                Route::apiResource('stations', StationController::class);
            });
            Route::group(['prefix' => 'users'], function () {
                Route::put('ban/{user}', [App\Http\Controllers\API\V1\Admin\UserController::class, 'banUser']);
                Route::put('restore/{user}', [App\Http\Controllers\API\V1\Admin\UserController::class, 'restoreUser']);
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
});
