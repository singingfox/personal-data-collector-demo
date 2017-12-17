<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    // use custom template to accommodate AngularJS
    return view('index');
})->middleware('auth');

Route::post('/data', 'DataCollectionController@saveData');

Route::get('/auth', function() {
    return view('auth');
});
