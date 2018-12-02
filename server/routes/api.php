<?php

use Illuminate\Http\Request;

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

Route::get('/posts/showOne/{id}', 'PostsController@show');

Route::get('/posts/showAll', 'PostsController@showAll');



Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
