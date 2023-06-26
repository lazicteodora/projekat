<?php

namespace Database\Factories;

use App\Models\Rad;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class KomentarFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'rad_id' => random_int(1,Rad::count()),
            'profesor_id' => random_int(1,User::count()),
            'ocena' => $this->faker->numberBetween(1, 100),
            'opis' => $this->faker->text()
        ];
    }
}
