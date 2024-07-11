// src/app/edit/[id]/page.js
'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { getTask, updateTask } from '../../../services/Taks/taskService';

const EditTask = () => {
    const [task, setTask] = useState({ title: '', description: '', taskType: '' });
    const [error, setError] = useState(null);
    const router = useRouter();
    const params = useParams();
    const id = params?.id;

    useEffect(() => {
        console.log('ID:', id); // Debugging ID value
        const fetchTask = async () => {
            if (id) {
                try {
                    const data = await getTask(id);
                    console.log('Task data:', data); // Debugging response data
                    setTask(data);
                } catch (error) {
                    console.error('Error fetching task:', error);
                    setError('Error fetching task');
                }
            } else {
                setError('Invalid task ID');
            }
        };
        fetchTask();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!id) {
            setError('Invalid task ID');
            return;
        }
        try {
            await updateTask(id, task);
            router.push('/pages/users');
        } catch (error) {
            console.error('Error updating task:', error);
            setError('Error updating task');
        }
    };

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div class="max-w-md flex flex-col p-4 rounded-md text-black bg-white h-full items-center justify-center">
            <div class="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">Actualizar <span class="text-[#7747ff]">Tarea</span></div>
            <form onSubmit={handleSubmit}
                class="flex flex-col gap-3">
                <div class="block relative">
                    <label for="email" class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Título</label>
                    <input type="text"
                        value={task.title}
                        onChange={(e) => setTask({ ...task, title: e.target.value })}
                        required
                        id="email" class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0" />

                </div>
                <div class="block relative">
                    <label for="input" class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Descripción</label>
                    <input type="text"
                        value={task.description}
                        onChange={(e) => setTask({ ...task, description: e.target.value })}
                        required
                        id="input" class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0" />

                </div>
                <div class="block relative">
                    <label for="password" class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Tipo Tarea</label>
                    <input type="text"
                        value={task.taskType}
                        onChange={(e) => setTask({ ...task, taskType: e.target.value })}
                        required
                        id="password" class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0" />

                </div>
                <button type="submit" class="bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal">Submit</button>

            </form>
        </div>




    );
};

export default EditTask;
