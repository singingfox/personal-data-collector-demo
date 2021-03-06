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
});

Route::post('/api/data', 'DataCollectionController@saveData');

Route::get('/api/acknowledgement', function() {
    return 'Thank you for providing your address.';
});
