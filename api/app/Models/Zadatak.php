<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Zadatak extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id', //profesor koji je zadao zadatak
        'rok', //datum do kad treba da se preda
        'koeficijent', //koliko % od ukupne ocene nosi ovaj rad 
        'tema',
         
        
    ];


    public function profesor()
    {
        return $this->belongsTo(User::class);
    }
}
