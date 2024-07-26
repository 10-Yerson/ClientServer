// pages/index.js (ou qualquer página ou componente onde você deseja usar o modal)
'use client'

import { useState } from 'react';
import Modal from '../../../components/Modal/index.jsx';

export default function Home() {
    const [modalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <button
                onClick={toggleModal}
                className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
            >
                Toggle modal
            </button>

            <Modal showModal={modalOpen} closeModal={closeModal} />
        </div>
    );
}
