<?php
/**
 * Created by PhpStorm.
 * User: ravib
 * Date: 1/9/2018
 * Time: 3:36 PM
 */

namespace App\Models;


use App\User;

class Role
{
    protected $guarded = [];

    public function user()
    {
        return $this->belongsToMany(User::class, 'role_user', 'user_id','role_id');
    }
}