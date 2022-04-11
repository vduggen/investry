<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreCashFlowRequest extends FormRequest
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
            'category_id' => ['required', 'exists:categories,id'],
            'wallet_id' => ['required', 'exists:wallet,id'],
            'name' => ['required', 'max:255'],
            'value' => ['required', 'numeric', 'min:0'],
            'date' => ['required', 'date', 'date_format:Y-m-d']
        ];
    }
}
