<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBookingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bookings', function (Blueprint $table) {
            $table->id();
            $table->date('booking_date');
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('station_id')->nullable()->constrained()->onDelete('cascade');
            $table->foreignId('game_id')->constrained()->onDelete('cascade');
            $table->foreignId('type_id')->nullable()->constrained()->onDelete('cascade');
            $table->time('start_time');
            $table->time('end_time');
            $table->datetime('check_in')->nullable();
            $table->datetime('check_out')->nullable();
            $table->timestamp('verified_at')->nullable();
            $table->timestamp('rejected_at')->nullable();
            $table->enum('status',['Pending','Verified','Rejected'])->default('Pending');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('bookings');
    }
}
