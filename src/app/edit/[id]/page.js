// src/app/edit/[id]/page.js
'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { getTask, updateTask } from '../../../services/taskService';

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
            router.push('/');
        } catch (error) {
            console.error('Error updating task:', error);
            setError('Error updating task');
        }
    };

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>Editar Tarea</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Título</label>
                    <input
                        type="text"
                        value={task.title}
                        onChange={(e) => setTask({ ...task, title: e.target.value })}
                        required
                    />
                </div>
                <div>
                    <label>Descripción</label>
                    <textarea
                        value={task.description}
                        onChange={(e) => setTask({ ...task, description: e.target.value })}
                        required
                    ></textarea>
                </div>
                <div>
                    <label>Tipo de Tarea</label>
                    <input
                        type="text"
                        value={task.taskType}
                        onChange={(e) => setTask({ ...task, taskType: e.target.value })}
                        required
                    />
                </div>

                <button type="submit">Actualizar</button>
            </form>
        </div>
    );
};

export default EditTask;
