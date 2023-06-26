<?php

namespace App\Http\Controllers;

use App\Http\Resources\RadResource;
use App\Models\Rad;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class RadController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return RadResource::collection(Rad::all());
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
    public function store(Request  $request)
    {
        $validator = Validator::make($request->all(), [
 
            'naziv' => 'required|string',
            'student'=>'required|integer|exists:users,id',
            'zadatak_id'=>'required|integer|exists:zadataks,id',
             
            'datum_predaje' => 'required|date', 

             
        ]);

        if ($validator->fails()) 
            return response()->json($validator->errors());
        $d = Rad::create([
            'naziv' => $request->naziv, 
            'student' => $request->student, 
            'zadatak_id' => $request->zadatak_id,
 
            'datum_predaje' => $request->datum_predaje,
 

        ]);
        $d->save();
        return response()->json([' kreirano!', $d]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Rad  $rad
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return new RadResource(Rad::find($id));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Rad  $rad
     * @return \Illuminate\Http\Response
     */
    public function edit(Rad $rad)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Rad  $rad
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Rad $rad)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Rad  $rad
     * @return \Illuminate\Http\Response
     */
    public function destroy(Rad $rad)
    {
        //
    }
}
