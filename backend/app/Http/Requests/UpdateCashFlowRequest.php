<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateCashFlowRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'category_id' => ['exists:categories,id'],
            'wallet_id' => ['exists:wallet,id'],
            'name' => ['max:255'],
            'value' => ['numeric', 'min:0'],
            'date' => ['date', 'date_format:Y-m-d']
        ];
    }
}   
