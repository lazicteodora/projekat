<?php

namespace App\Http\Resources;

use App\Models\File;
use App\Models\User;
use App\Models\Zadatak;
use Illuminate\Http\Resources\Json\JsonResource;

class RadResource extends JsonResource
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
            'student' => User::find($this->student),
            'zadatak' =>new ZadatakResource( Zadatak::find($this->zadatak_id)),
            'datum_predaje' => $this->datum_predaje,
            'file' => File::find($this->file_id),
             
        ];
    }
}
