<?php

namespace Database\Seeders;

use App\Models\Komentar;
use App\Models\Rad;
use App\Models\User;
use App\Models\Zadatak;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {

        User::truncate();
        Komentar::truncate();
        Rad::truncate();
        Zadatak::truncate();

        User::factory(10)->create();
       
        User::create([
            'name' => 'student', 
            'email' => 'student@gmail.com', 
            'password' => Hash::make('student')]);
        User::create([
                'name' => 'profesor', 
                'email' => 'profesor@gmail.com', 
                'profesor' => 1, 
                'password' => Hash::make('profesor')]);


                (new ZadatakSeeder())->run();
                (new RadSeeder())->run();
                (new KomentarSeeder())->run();
                 
            

    }
}
