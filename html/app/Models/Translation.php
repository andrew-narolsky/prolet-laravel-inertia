<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Translation extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'text',
        'seo_title',
        'seo_description',
        'seo_h1',
        'language_id'
    ];

    /**
     * Get all models that own translation.
     */
    public function translation()
    {
        return $this->morphTo();
    }
}
