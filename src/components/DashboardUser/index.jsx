'use client'

import Dashboard from "../Dashboard";
import { useEffect, useState } from "react";
import { getAllTasks, deleteTask } from '../../services/Taks/taskService'
import Link from "next/link";
import './css.css'

export default function GetUser() {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            const data = await getAllTasks();
            setTasks(data);
        };
        fetchTasks();
    }, []);


    const handleDelete = async (id) => {
        await deleteTask(id);
        setTasks(tasks.filter(task => task._id !== id));
    };

    return (
        <>
            <Dashboard />
            <div className="p-4 sm:ml-64">
                <Link href="/create">
                    <button className="btn">
                        <div className="svg-wrapper-1">
                            <div className="svg-wrapper">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                >
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path
                                        fill="currentColor"
                                        d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                                    ></path>
                                </svg>
                            </div>
                        </div>
                        <span className="span">Crear</span>
                    </button>
                </Link>
            </div>

            <div class="overflow-x-auto shadow-md sm:rounded-lg mt-1 p-4 sm:ml-64">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">title</th>
                            <th scope="col" className="px-6 py-3">description</th>
                            <th scope="col" className="px-6 py-3">Type Task</th>
                            <th scope="col" className="px-6 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map(task => (
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={task._id}>
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {task.title}
                                </th>
                                <td class="px-6 py-4">
                                    {task.description}
                                </td>
                                <td class="px-6 py-4">
                                    {task.taskType}
                                </td>
                                <td class="px-6 py-4 flex flex-row justify-start content-center gap-3">
                                    <Link href={`/edit/${task._id}`}>
                                        <img className="w-7 object-contain "
                                            src="\img\editar.png" alt="img" />
                                    </Link>
                                    <button onClick={() => handleDelete(task._id)} class="w-7 object-contain">
                                        <img src="\img\eliminar.png" alt="img" />
                                    </button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>

        </>
    )
}