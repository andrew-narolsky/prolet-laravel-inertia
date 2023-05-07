<?php

namespace App\Traits;

use App\Models\Language;
use App\Models\Translation;

trait Translationable
{
    /**
     * Get a model translations.
     *
     * @return object
     */
    public function translations()
    {
        return $this->morphMany(Translation::class, 'translation');
    }

    /**
     * Get a model translation.
     *
     * @return object
     */
    public function translation()
    {
        $locale = app()->getLocale() ? app()->getLocale() : 'ua';
        $language_id = Language::where('code', $locale)->pluck('id')->first();
        return $this->morphOne(Translation::class, 'translation')->where('language_id', $language_id);
    }

    /**
     * Get a model translation.
     *
     * @return object
     */
    public function translationSave($language_id)
    {
        return $this->morphOne(Translation::class, 'translation')->where('language_id', $language_id);
    }
}
