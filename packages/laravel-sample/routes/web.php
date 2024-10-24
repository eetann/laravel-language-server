<?php

use App\Http\Controllers\BookController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});
// Route::get("book", "BookController@index");
// Route::get("book/{id}", "BookController@show");
Route::resource('book', BookController::class);
