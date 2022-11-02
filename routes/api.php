<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\OrderController;
use Illuminate\Http\Request;
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

//это отдельный машршрут (будет переписываться на группу):
// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// }); 

//группа маршрутов для зарегистрированных пользователей
Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::post('/logout', [LoginController::class, 'logout']);
});

//определяем маршрут
Route::get('/home', [HomeController::class, 'index']);
Route::get('/home-latest', [HomeController::class, 'latestProducts']);
Route::get('/category/{category}', [HomeController::class, 'category']);
Route::get('/product/{product}', [HomeController::class, 'product']);

Route::post('/order', [OrderController::class, 'placeOrder']);

Route::post('login', [LoginController::class, 'authentificate']);
