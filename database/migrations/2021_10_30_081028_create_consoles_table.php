<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateConsolesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('consoles', function (Blueprint $table) {
            $table->id();
            $table->string('serial_number')->unique();
            $table->enum('type', ['ps5', 'ps4', 'ps3', 'ps2', 'xbox360']);
            $table->enum('gen', ['First', 'Second', 'Third']);
            $table->enum('storage', ['SSD', 'HDD']);
            $table->string('storage_size');
            $table->foreignId('condition_id')->constrained();
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
        Schema::dropIfExists('consoles');
    }
}
