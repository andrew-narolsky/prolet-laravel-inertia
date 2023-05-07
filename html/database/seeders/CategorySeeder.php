<?php

namespace Database\Seeders;

use App\Models\Language;
use App\Models\Shop\Category;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Http;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $response = Http::post('https://prolet.siteforyou.org/api/categories');
        $categories = $response->object();

        foreach ($categories as $item) {

            // $image = Image::create(['path' => $item->image]);

            $category = Category::create([
                'name' => $item->name,
                'slug' => $item->alias,
                'parent_id' => $item->parent,
                'image_id' => $image->id ?? NULL,
                'old_id' => $item->id,
            ]);
            $languages = Language::all();
            foreach ($languages as $language) {
                $category->translations()->create([
                    'language_id' => $language->id,
                    'text' => $item->text,
                    'seo_title' => $item->title,
                    'seo_description' => $item->description,
                    'seo_h1' => $item->name,
                ]);
            }
        }

        $newCategories = Category::all();
        $catIds = Category::pluck('id', 'old_id')->toarray();

        foreach ($newCategories as $category) {
            $category->update(['parent_id' => $catIds[$category->parent_id] ?? 0]);
        }
    }
}
