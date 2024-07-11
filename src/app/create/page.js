// src/app/create/page.js
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createTask } from '../../services/Taks/taskService';

const CreateTask = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [taskType, setTaskType] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createTask({ title, description, taskType });
            router.push('pages/users');
        } catch (error) {
            console.error('Error al crear la tarea:', error);
            setError('Error al crear la tarea. Inténtalo de nuevo.');
        }
    };

    return (

        <form onSubmit={handleSubmit}>
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
                <div class="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <p class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                            Create an account
                        </p>
                        <div>
                            <label class="block mb-2 text-sm font-medium text-gray-900">
                                Titulo
                            </label>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" id="username" />
                        </div>
                        <div>
                            <label class="block mb-2 text-sm font-medium text-gray-900">Descripción</label>
                            <input
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                            ></input>
                        </div>

                        <div>
                            <label class="block mb-2 text-sm font-medium text-gray-900">Type taks</label>
                            <input
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                                value={taskType}
                                onChange={(e) => setTaskType(e.target.value)}
                                required
                            ></input>
                        </div>

                        <button type="submit" class="w-full bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  focus:ring-blue-800 text-white">
                            Create Taks
                        </button>

                    </div>
                </div>
            </div>
        </form>






    );
};

export default CreateTask;
