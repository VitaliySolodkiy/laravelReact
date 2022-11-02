<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function authentificate(Request $request)
    {
        $data = $request->validate([ //validate - возвращает массив введенных данных
            'email' => 'required|email',
            'password' => 'required'
        ]);
        if (Auth::attempt($data)) { //Auth - фасад
            //attempt - проверяет есть ли такой пользователь и подходит ли пароль. Возвращает true/false
            $request->session()->regenerate(); //regenerate() - обновляет данные сессии
            return response()->json(Auth::user()); //Auth::user() - возвращает данные авторизированного пользователя
        }
        return response()->json([
            'errors' => 'User not found'
        ]);
    }

    public function logout(Request $request)
    {
        $request->session()->invalidate(); //invalidate() - завершает текущую сессию (удаляет ее)
        $request->session()->regenerateToken(); //заново создается токен из сессии
        return response()->json('Logout success');
    }

    public function registration(Request $request)
    {
        return response()->json('registration success');
    }
}
