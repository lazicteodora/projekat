<?php

use App\Http\Controllers\AutfController;
use App\Http\Controllers\FileController;
use App\Http\Controllers\KomentarController;
use App\Http\Controllers\RadController;
use App\Http\Controllers\ZadatakController;
use App\Models\Komentar;
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
Route::get("/zadatak",[ZadatakController::class,'index']);

Route::get("/radovi",[RadController::class,'index']);

Route::post("/register",[AutfController::class,'register']);
Route::post("/login",[AutfController::class,'login']);



Route::get('/files', [FileController::class, 'index'])->name('files');
Route::post('/files', [FileController::class, 'upload'])->name('files');   



Route::get("/komentar",[KomentarController::class,'index']);
Route::post("/komentar",[KomentarController::class,'store']);


Route::group(['middleware' => ['auth:sanctum']], function () {

 

    Route::post("/radovi",[RadController::class,'store']);

    
    Route::post("/logout",[AutfController::class,'logout']);

});

Route::post("/zadatak",[ZadatakController::class,'store']);
Route::put("/zadatak/{id}",[ZadatakController::class,'update']);
Route::delete("/zadatak/{id}",[ZadatakController::class,'destroy']);

Route::middleware(['auth:sanctum','isAPIAdmin'])->group(function(){ //ako je ulogovan admin


    Route::post("/komentar",[KomentarController::class,'store']);


    Route::post("/logout",[AutfController::class,'logout']);



});
