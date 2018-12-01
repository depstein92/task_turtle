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

Route::get('posts/{$narrative}/{$image_url}', function($narrative, $image_url){

  DB::insert('insert into posts(narrative, image_url) values(?, ?)', [ $narrative, $image_url ]);
});


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
