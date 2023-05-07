<?php

namespace App\Http\Controllers\Admin\Shop;

use App\Classes\Tree;
use App\Http\Controllers\Controller;
use App\Models\Language;
use App\Models\Shop\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{
    public object $language;
    public object $category;
    public object $tree;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(Language $language, Category $category, Tree $tree)
    {
        $this->language = $language;
        $this->category = $category;
        $this->tree = $tree;
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = $this->category->with('parent')->get();
        return Inertia::render('Admin/Shop/Categories/Index', [
            'title' => 'Список категорій',
            'categories' => $categories
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $languages = $this->language->all();
        $categories = $this->tree->getTree($this->category->get()->keyBy('id')->toarray());
        return Inertia::render('Admin/Shop/Categories/Create', [
            'title' => 'Створення нової категорії',
            'categories' => $categories,
            'depth' => '',
            'languages' => $languages,
            'tiniMSEApiKey' => env('TINIMCE_API_KEY')
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
