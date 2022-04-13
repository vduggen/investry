<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use EloquentFilter\Filterable;

class CashFlowModel extends Model
{
    use HasFactory;
    use SoftDeletes;
    use Filterable;

    protected $table = 'cash_flow';

    protected $fillable = [
        'category_id',
        'wallet_id',
        'name',
        'value',
        'date',
    ];
    
}
