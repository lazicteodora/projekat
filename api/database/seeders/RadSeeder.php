<?php

namespace Database\Seeders;

use App\Models\Rad;
use Illuminate\Database\Seeder;

class RadSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Rad::create([
            'student' => 1, // ID studenta koji je predao ovaj rad
            'zadatak_id' => 2,  
            'datum_predaje' => '2023-03-20', // Datum predaje rada
             
        ]);
        
        // Objekat 2
        Rad::create([
            'student' => 2, // ID studenta koji je predao ovaj rad
            'zadatak_id' => 1,  
            'datum_predaje' => '2023-04-15', // Datum predaje rada
             
        ]);
        
        // Objekat 3
        Rad::create([
            'student' => 3, // ID studenta koji je predao ovaj rad
            'zadatak_id' => 1,  
            'datum_predaje' => '2023-05-01', // Datum predaje rada
            
        ]);
    }
}
