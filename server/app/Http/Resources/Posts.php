<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Posts extends JsonResource
{

    public function toArray($request)
    {
      return [
        'id' => $this->id,
        'image_url'=> $this->image_url,
        'content'=> $this->content,
        'created_at'=> $this->created_at,
        'updated_at' => $this->updated_at
      ];
    }
}
