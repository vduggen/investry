<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class CategoryModel extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $table = 'categories';

    protected $fillable = [
			'color_id',
	    'name',
	    'description',
	    'icon',
		];

		public function colorId()
		{

			return $this->hasOne(ColorsModel::class, 'id', 'color_id');

		}

		public function cashFlowCount()
		{

			return $this->hasMany(CashFlowModel::class, 'category_id', 'id');

		}
}
