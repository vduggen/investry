<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class CashFlowModel extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $table = 'cash_flow';

    protected $fillable = [
        'category_id',
        'wallet_id',
        'name',
        'value',
        'date',
    ];
    
}
