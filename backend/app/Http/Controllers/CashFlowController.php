<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\CashFlowModel;
use App\Http\Requests\StoreCashFlowRequest;
use App\Http\Requests\UpdateCashFlowRequest;

class CashFlowController extends Controller
{

    protected $columns = ['category_id', 'wallet_id', 'name', 'value', 'date'];
    
    /**
     * Display a listing of the resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {

        $body = $request->all();

        $result = CashFlowModel::filter($body)->get();

        return response()->data($result);

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreCashFlowRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreCashFlowRequest $request)
    {
        
        $result = CashFlowModel::create($request->all());

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
        
        $result = CashFlowModel::find($id);

        if (!$result)
        {

            return response()->notFound();

        }

        return response()->data($result);

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateCashFlowRequest  $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateCashFlowRequest $request, $id)
    {
        
        $CashFlow = CashFlowModel::find($id);

        if (!$CashFlow) return response()->notFound();
        if (!$request->all()) return response()->bodyEmpty();
        
        $CashFlow->fill($request->all());

        $result = $CashFlow->update();

        if ($result) return response()->updatedSuccess($CashFlow);
        
        return response()->failure('atualizar');

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {

        $result = CashFlowModel::destroy($id);

        if (!$result) return response()->notFound();

        return response()->deletedSuccess();

    }
}
