<?php

namespace App\Http\Controllers\API\V1\Admin;

use App\Http\Actions\Store\StoreConsoleAction;
use App\Models\Console;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Store\StoreConsoleRequest;
use App\Http\Resources\ConsoleResource;

class ConsoleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //
        if ($request->total) {
            $paginate = $request->total;
            $selected = request('selected');
            $search_term = request('q', '');
            $sort_direction = request('sort_direction', 'desc');
            $sort_field = request('sort_field', 'created_at');

            if (!in_array($sort_direction, ['asc', 'desc'])) {
                $sort_direction = 'desc';
            }
            if (!in_array($sort_field, ['name', 'created_at'])) {
                $sort_field = 'created_at';
            }

            $consoles = Console::when($selected, function ($query) use ($selected) {
                $query->WhereHas('condition', function ($query) use ($selected) {
                    $query->where('id', $selected);
                });
            })->search(trim($search_term))
                ->orderBy($sort_field, $sort_direction)
                ->paginate($paginate);

            return ConsoleResource::collection($consoles);
        } else {
            $consoles = Console::all();
            return ConsoleResource::collection($consoles);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreConsoleRequest $request, StoreConsoleAction $action)
    {
        //
        $action->execute($request);

        return new ConsoleResource(Console::with(['condition', 'type'])->get());
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Console  $console
     * @return \Illuminate\Http\Response
     */
    public function show(Console $console)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Console  $console
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Console $console)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Console  $console
     * @return \Illuminate\Http\Response
     */
    public function destroy(Console $console)
    {
        //
    }
}
