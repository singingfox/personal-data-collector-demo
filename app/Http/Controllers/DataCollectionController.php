<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

class DataCollectionController extends Controller
{
    public function __construct()
    {

    }

    public function saveData() {
        // try to save

        // return a response accordingly
        return response()->json(['Data Posted']);
    }
}
