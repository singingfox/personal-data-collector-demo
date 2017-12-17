<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Validator;
use App\Address;

class DataCollectionController extends Controller
{
    public function __construct()
    {

    }

    public function saveData(Request $request) {
        $validator = Validator::make($request->all(), [
            'name'       => 'required|min:2|max:50',
            'street'      => 'required|min:10|max:100',
            'city'      => 'required|min:2|max:100',
            'state'      => 'required|size:2',
            'zipcode'      => 'required|max:5'
        ]);

        $result = [];
        if ($validator->fails()) {
            $result = ['success' => false, 'reason' => 'validation failure'];
        }
        else {
            $address = new Address($request->all());
            if($address->save()) {
                $result = [ 'success' => true, 'count' => Address::count(), 'mostRecent' => $address ];
            }
            else {
                $result = ['success' => false, 'reason' => 'saving failure'];
            }
        }

        return response()->json($result);
    }
}
