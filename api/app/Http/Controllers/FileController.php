<?php

namespace App\Http\Controllers;

use App\Models\File;
use App\Models\Rad;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
class FileController extends Controller
{
    public function index() {
        $files = File::all();
        return response()->json(["status" => "success", "count" => count($files), "data" => $files]);
    }
 
    public function upload(Request $request) {
        $imagesName = [];
        $response = [];
 
        $validator = Validator::make($request->all(),
            [
                'files' => 'required',
                'files.*' => 'required|mimes:pdf|max:2048',
                'datum_predaje' => 'required|string|max:30', 
                'student' => 'required|integer|exists:users,id',
                'zadatak_id' => 'required|integer|exists:zadataks,id', 
            ]
        );
 
        if ($validator->fails()) 
            return response()->json([
                 'validation_errors'=>$validator->errors(),
            ]);
 
        if($request->has('files')) {
            foreach($request->file('files') as $file) {
                $filename = Str::random(32).".".$file->getClientOriginalExtension();
                $file->move('uploads/', $filename);
 
                 $fajl= File::create([
                    'file_name' => $filename
                ]);
            }
            
          Rad::create([
                'datum_predaje' => $request->datum_predaje, 
                'student' => $request->student, 
                'zadatak_id' => $request->zadatak_id,
                'file_id' => $fajl->id,
    
            ]);    
            $response["status"] = "200";
            $response["message"] = "Success!"; 

        }
 
        else {
            $response["status"] = "failed";
            $response["message"] = "Failed! image(s) not uploaded";
        }
        return response()->json($response);
    }
}
