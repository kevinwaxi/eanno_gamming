<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\V1\RolesController;
use App\Http\Controllers\API\V1\PermissionsController;
use App\Http\Controllers\InvitationController;

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

Route::prefix('v1')->group(function () {
    // api/v1/permissions/
    Route::apiResource('permissions', PermissionsController::class);
    // api/v1/roles/
    Route::apiResource('roles', RolesController::class);
    // api/v1/invitations
    Route::apiResource('invitations', InvitationController::class);
    Route::get('invitations/approve/{id}', [InvitationController::class,'approve']);
});
