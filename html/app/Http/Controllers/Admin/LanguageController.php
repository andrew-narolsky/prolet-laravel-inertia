<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\LanguageRequest;
use App\Models\Language;
use Inertia\Inertia;

class LanguageController extends Controller
{
    public object $language;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(Language $language)
    {
        $this->language = $language;
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $languages = $this->language->all();
        return Inertia::render('Admin/Language/Index', [
            'title' => 'Список мов',
            'languages' => $languages
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Language/Create', [
            'title' => 'Створення нової мови',
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(LanguageRequest $request)
    {
        $this->language->create($request->all());
        session()->flash('success', 'Нова мова успішно додана!');
        return redirect()->route('languages.index');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Language $language)
    {
        return Inertia::render('Admin/Language/Edit', [
            'title' => 'Редагування мови',
            'language' => $language
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(LanguageRequest $request, Language $language)
    {
        $language->update($request->all());
        session()->flash('success', 'Мова успішно оновлена!');
        return redirect()->route('languages.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Language $language)
    {
        if ($language->code == config('app.fallback_locale')) {
            session()->flash('error', 'Базову мову не можливо видалити!');
        } else {
            $language->delete();
            session()->flash('success', 'Мова успішно видалена!');
        }
        return redirect()->route('languages.index');
    }
}
