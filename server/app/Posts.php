<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Posts extends Model
{
  protected $fillable = [
    "image",
    "narrative",
    "title",
    "font_type"
  ];



}
