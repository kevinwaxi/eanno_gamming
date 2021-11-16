<?php
namespace App\Http\Actions\Store;

use App\Models\Price;
use App\Models\PriceStation;
use Illuminate\Http\Request;

class StorePriceAction
{
    public function execute(Request $request): void
    {
        # code...
        $price = Price::create([
            'price' => $request->price,
            'details' => $request->details,
            'number_of_players' => $request->number_of_players,
            'is_available' => $request->is_available,
        ]);

        $stations = $request->station_id;

        $priceStation = [];
        foreach ($stations as $s) {
            array_push($priceStation, [
                'station_id' => $s,
                'price_id' => $price->id,
            ]);
        }

        PriceStation::insert($priceStation);

    }
}
