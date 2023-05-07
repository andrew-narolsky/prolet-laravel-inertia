<?php

use App\Http\Controllers\IndexController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', [IndexController::class, 'index'])->name('home');

Route::group([
    'prefix'=>'admin',
], function () {
    Route::get('/', [App\Http\Controllers\Admin\IndexController::class, 'index'])->name('admin');
    Route::resource('/languages', App\Http\Controllers\Admin\LanguageController::class, ['only' => ['index', 'create', 'store', 'edit', 'update', 'destroy']]);
    Route::resource('/users', App\Http\Controllers\Admin\UserController::class, ['only' => ['index', 'create', 'store', 'edit', 'update']]);
    // Shop
    Route::resource('/categories', App\Http\Controllers\Admin\Shop\CategoryController::class, ['only' => ['index', 'create', 'store', 'edit', 'update', 'destroy']]);
});
