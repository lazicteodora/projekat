<?php

namespace Database\Seeders;

use App\Models\Zadatak;
use Illuminate\Database\Seeder;

class ZadatakSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Objekat 1
         Zadatak::create([
            'user_id' => 1, // ID profesora koji je zadužen za ovaj zadatak
            'rok' => '2023-03-31', // Rok za predaju zadatka
            'koeficijent' => 20, // Ovaj zadatak nosi 20% od ukupne ocene
            'tema' => 'Istraživanje implementacije blockchain tehnologije' // Tema zadatka
        ]);
        
        // Objekat 2
        Zadatak::create([
            'user_id' => 2, // ID profesora koji je zadužen za ovaj zadatak
            'rok' => '2023-04-15', // Rok za predaju zadatka
            'koeficijent' => 15, // Ovaj zadatak nosi 15% od ukupne ocene
            'tema' => 'Analiza uticaja društvenih mreža na ponašanje korisnika' // Tema zadatka
        ]);

        // Objekat 3
        Zadatak::create([
            'user_id' => 1, // ID profesora koji je zadužen za ovaj zadatak
            'rok' => '2023-05-01', // Rok za predaju zadatka
            'koeficijent' => 25, // Ovaj zadatak nosi 25% od ukupne ocene
            'tema' => 'Razvoj softverskog sistema za upravljanje zalihama' // Tema zadatka
        ]);

        // Objekat 4
        Zadatak::create([
            'user_id' => 3, // ID profesora koji je zadužen za ovaj zadatak
            'rok' => '2023-05-15', // Rok za predaju zadatka
            'koeficijent' => 10, // Ovaj zadatak nosi 10% od ukupne ocene
            'tema' => 'Analiza performansi različitih algoritama pretrage' // Tema zadatka
        ]);

        // Objekat 5
        Zadatak::create([
            'user_id' => 2, // ID profesora koji je zadužen za ovaj zadatak
            'rok' => '2023-06-01', // Rok za predaju zadatka
            'koeficijent' => 30, // Ovaj zadatak nosi 30% od ukupne ocene
            'tema' => 'Razvoj mobilne aplikacije za upravljanje projektima' // Tema zadatka
        ]);
    }
}
