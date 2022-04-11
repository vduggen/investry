<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\CategoryModel;

use App\Http\Requests\StoreCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $Categories = CategoryModel::all();

        return response()->data($Categories);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreCategoryRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreCategoryRequest $request)
    {
        
        $result = CategoryModel::create($request->all());
        
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
        $Category = CategoryModel::find($id);

        if (!$Category)
        {

            return response()->notFound();

        }

        return response()->data($Category);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateCategoryRequest  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateCategoryRequest $request, $id)
    {

        $Category = CategoryModel::find($id);

        if (!$Category) return response()->notFound();
        if (!$request->all()) return response()->bodyEmpty();

        $Category->fill($request->all());

        $result = $Category->update();

        if ($result) return response()->updatedSuccess($Category);
        
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
        
        $result = CategoryModel::destroy($id);

        if (!$result) return response()->notFound();

        return response()->deletedSuccess();

    }
}
