<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\InvitationController;
use App\Http\Controllers\API\V1\UserController;
use App\Http\Controllers\API\V1\PriceController;
use App\Http\Controllers\API\V1\RolesController;
use App\Http\Controllers\API\V1\ConsoleController;
use App\Http\Controllers\API\V1\CategoryController;
use App\Http\Controllers\API\V1\PermissionsController;

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
    Route::put('users/ban/{id}', [UserController::class, 'ban']);
    Route::put('users/assignRole/{id}', [UserController::class, 'assign']);
    Route::put('users/restore/{id}', [UserController::class, 'restore']);
    Route::apiResource('users', UserController::class);
    // api/v1/permissions/
    Route::apiResource('permissions', PermissionsController::class);
    // api/v1/roles/
    Route::apiResource('roles', RolesController::class);
    // api/v1/invitations
    Route::apiResource('invitations', InvitationController::class);
    Route::get('invitations/approve/{id}', [InvitationController::class, 'approve']);
    //api/v1/pricing
    Route::apiResource('prices', PriceController::class);
    // api/v1/consoles
    Route::apiResource('consoles', ConsoleController::class);
    // api/v1/categories
    Route::post('categories/upload/', [CategoryController::class, 'upload']);
    Route::post('categories/deleteCover',[CategoryController::class,'deleteImage']);
    Route::apiResource('categories', CategoryController::class);
});
