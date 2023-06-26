<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rad extends Model
{
    use HasFactory;
    protected $fillable = [
        'student', //spoljni kljuc ka tabeli user,
        'zadatak_id',//spoljni kljuc ka tabeli zadatak,
        'datum_predaje',
        'file_id', //spoljni kljuc ka tabeli u kojoj cuvamo samo radove
        

         
        
    ];
    public function zadatak()
    {
        return $this->belongsTo(Zadatak::class);
    }
    public function student()
    {
        return $this->belongsTo(User::class);
    }

}
