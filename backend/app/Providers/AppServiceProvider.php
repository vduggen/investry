<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Response;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        
        Response::macro('data', function ($data, $status = 200) {
            return Response::make(['data' => $data], $status);
        });
        
        Response::macro('message', function ($message, $status = 200) {
            return Response::make(['message' => $message], $status);
        });
        
        Response::macro('messageData', function ($message, $data, $status = 200) {
            return Response::make([
                'message' => $message,
                'data' => $data
            ], $status);
        });
        
        Response::macro('notFound', function () {
            return Response::make(['message' => "Id não encontrado"], 404);
        });
        
        Response::macro('createdSuccess', function ($data) {
            return Response::make([
                'message' => "Criado com sucesso",
                'data' => $data
            ], 200);
        });
        
        Response::macro('updatedSuccess', function ($data) {
            return Response::make([
                'message' => "Atualizado com sucesso",
                'data' => $data
            ], 200);
        });
        
        Response::macro('failure', function ($method, $status = 500) {
            return Response::make([
                'message' => "Não foi possível $method"
            ], $status);
        });
        
        Response::macro('deletedSuccess', function ($status = 200) {
            return Response::make(['message' => "Deletado com sucesso"], $status);
        });
        
        Response::macro('bodyEmpty', function () {
            return Response::make(['message' => "O body não pode ser vazio"], 400);
        });

    }
}
