<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\WalletModel;
use App\Http\Requests\StoreWalletRequest;
use App\Http\Requests\UpdateWalletRequest;

class WalletController extends Controller
{
    protected $columns = ['value_total'];

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $result = WalletModel::all();

        return response()->data($result);
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreWalletRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreWalletRequest $request)
    {

        $result = WalletModel::create($request->all());

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
        
        $result = WalletModel::find($id);

        if (!$result)
        {

            return response()->notFound();

        }

        return response()->data($result);

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateWalletRequest  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateWalletRequest $request, $id)
    {

        $Wallet = WalletModel::find($id);

        if (!$Wallet) return response()->notFound();
        if (!$request->all()) return response()->bodyEmpty();
        
        $Wallet->fill($request->all());

        $result = $Wallet->update();

        if ($result) return response()->updatedSuccess($Wallet);
        
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
      
        $result = WalletModel::destroy($id);

        if (!$result) return response()->notFound();

        return response()->deletedSuccess();

    }
}
