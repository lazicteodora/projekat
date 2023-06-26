<?php

namespace Database\Seeders;

use App\Models\Komentar;
use Illuminate\Database\Seeder;

class KomentarSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Komentar::factory(3)->create();
        
    }
}
