<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Response;
use Illuminate\Database\QueryException;

use App\Models\ColorsModel;
use App\Http\Requests\StoreColorsRequest;
use App\Http\Requests\UpdateColorsRequest;

class ColorsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        
        $result = ColorsModel::all();

        return response()->data($result);

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreColorsRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreColorsRequest $request)
    {

        $result = ColorsModel::create($request->all());

        if (!$result) return response()->failure('criar');
        
        return response()->createdSuccess($result);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {

        $result = ColorsModel::find($id);

        if (!$result)
        {

            return response()->notFound();

        }

        return response()->data($result);

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateColorsRequest  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateColorsRequest $request, $id)
    {
        
        $Color = ColorsModel::find($id);

        if (!$Color) return response()->notFound();
        if (!$request->all()) return response()->bodyEmpty();

        $Color->fill($request->all());

        $result = $Color->update();

        if ($result) return response()->updatedSuccess($Color);
        
        return response()->failure('atualizar');

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {

        $result = ColorsModel::destroy($id);

        if (!$result) return response()->notFound();

        return response()->deletedSuccess();

    }
}
