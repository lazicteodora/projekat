<?php

namespace App\Http\Resources;

use App\Models\Rad;
use App\Models\User;
use Illuminate\Http\Resources\Json\JsonResource;

class KomentarResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'rad_id' => new RadResource(Rad::find($this->rad_id)),
            'profesor' => User::find($this->profesor_id),
            'ocena' => $this->ocena,
            'opis' => $this->opis,
          
        ];
    }
}
