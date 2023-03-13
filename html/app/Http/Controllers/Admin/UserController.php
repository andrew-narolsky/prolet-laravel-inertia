<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserRequest;
use App\Models\User;
use Inertia\Inertia;

class UserController extends Controller
{
    public object $user;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(User $user)
    {
        $this->user = $user;
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = $this->user->paginate(20);
        return Inertia::render('Admin/Users/Index', [
            'title' => 'Список користувачів',
            'users' => $users
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Users/Create', [
            'title' => 'Створення нового користувача',
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(UserRequest $request)
    {
        $request['password'] = bcrypt($request->get('password'));
        $this->user->create($request->all());
        session()->flash('success', 'Нового корситувача успішно додано!');
        return redirect()->route('users.index');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        return Inertia::render('Admin/Users/Edit', [
            'title' => 'Редагування корситувача',
            'user' => $user
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UserRequest $request, User $user)
    {
        $user->update($request->all());
        session()->flash('success', 'Дані успішно змінено!');
        return redirect()->route('users.index');
    }
}
