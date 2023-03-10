<?php

namespace Database\Seeders;

use App\Models\Language;
use Illuminate\Database\Seeder;

class LanguageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $languages = [
            0 => [
                'name' => 'Українська',
                'code' => 'ua',
            ],
            1 => [
                'name' => 'Російська',
                'code' => 'ru',
            ]
        ];

        foreach ($languages as $language) {
            Language::create($language);
        }
    }
}
