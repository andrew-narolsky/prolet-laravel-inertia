<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $response = Http::post('https://prolet.siteforyou.org/api/users');
        $users = $response->object();

        foreach ($users as $user) {

            $facebook_id = (int)$user->login ? $user->login : NULL;
            $password = ($user->id <= 3) ? bcrypt('F3r6bfJDg') : bcrypt(Str::random(20));

            User::create([
                'login' => $user->login,
                'name' => $user->name,
                'phone' => $user->phone,
                'email' => $user->email,
                'facebook_id' => $facebook_id,
                'role_id' => $user->role,
                'email_verified_at' => now(),
                'password' => $password,
                'remember_token' => Str::random(10),
            ]);
        }
    }
}
