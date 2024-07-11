'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createUser } from '../../services/User/userService';
import './css.css'

export default function Signup() {

    const [name, setName] = useState('');
    const [gmail, setGmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createUser({ name, gmail, password });
            router.push('/dashboard');
        } catch (error) {
            console.error('Error al crear la tarea:', error);
            setError('Error al crear la tarea. Inténtalo de nuevo.');
            // Aquí puedes agregar lógica para mostrar un mensaje de error al usuario
        }
    };

    return (
        <div className='form-register'>
            <form class="form_main" onSubmit={handleSubmit}>
                <p class="heading">Registrarse</p>
                <div class="inputContainer">
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        placeholder="Name" id="username" class="inputField" />
                </div>

                <div class="inputContainer">
                    <input
                        type="text"
                        value={gmail}
                        onChange={(e) => setGmail(e.target.value)}
                        required
                        placeholder="Gmail" id="username" class="inputField" />
                </div>

                <div class="inputContainer">
                    <input
                        type="text"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder="Password" id="password" class="inputField" />
                </div>


                <button id="button" type="submit">Entrar</button>
                <div class="signupContainer">
                    <p>¿Ya tienes cuenta?</p>
                    <a href="/pages/login" class="underline">Acceder</a>

                </div>
            </form>
        </div>
    )
}