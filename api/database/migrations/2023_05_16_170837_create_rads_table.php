<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRadsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rads', function (Blueprint $table) {
            $table->id();
            $table->foreignId('student');
            $table->foreignId('zadatak_id');
            $table->date('datum_predaje');
            $table->foreignId('file_id')->nullable();
 

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('rads');
    }
}
