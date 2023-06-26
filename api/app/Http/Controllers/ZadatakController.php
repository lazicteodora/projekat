<?php

namespace App\Http\Controllers;

use App\Http\Resources\ZadatakResource;
use App\Models\Zadatak;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ZadatakController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return ZadatakResource::collection(Zadatak::all());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request,Zadatak $zadatak)
    {
        $validator = Validator::make($request->all(), [
 
            'tema' => 'required|string',
            'user_id'=>'required|integer|exists:users,id',
            'koeficijent'=>'required|integer',
             
            'rok' => 'required|date', 

             
        ]);

        if ($validator->fails()) 
            return response()->json($validator->errors());
        $d = Zadatak::create([
            'tema' => $request->tema, 
            'user_id' => $request->user_id, 
            'koeficijent' => $request->koeficijent,
 
            'rok' => $request->rok,
 

        ]);
        $d->save();
        return response()->json([' kreirano!', $d]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Zadatak  $zadatak
     * @return \Illuminate\Http\Response
     */
    public function show( $id)
    {
        return new ZadatakResource(Zadatak::find($id));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Zadatak  $zadatak
     * @return \Illuminate\Http\Response
     */
    public function edit(Zadatak $zadatak)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Zadatak  $zadatak
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
 
            'tema' => 'required|string',
            'user_id'=>'required|integer|exists:users,id',
            'koeficijent'=>'required|integer',
             
            'rok' => 'required|date', 

             
        ]);

        if ($validator->fails()) 
            return response()->json($validator->errors());
        $d = Zadatak::find($id);

            if( $d){
                $d->tema=$request->tema;
                $d->user_id=$request->user_id;
                $d->koeficijent=$request->koeficijent;
                $d->rok=$request->rok;
 
                 
                $d->save();
                return response()->json(['Uspesno izmenjeno!',  $d]);
    
            }else{
                return response()->json('Trazeni objekat ne postoji u bazi');
    
            }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Zadatak  $zadatak
     * @return \Illuminate\Http\Response
     */
    public function destroy( $id)
    {
        $d = Zadatak::find($id);
        if($d){
            $d->delete();
            return response()->json(['Uspesno obrisano!', $d]);
        
        }
           
       return response()->json('Trazeni objekat ne postoji u bazi');
    }
}
