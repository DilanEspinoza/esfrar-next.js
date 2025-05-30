// components/Modal.js
'use client';

import React from 'react';

export const ModalImage = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-[#000000b9] bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={onClose}
        >
            <div
                className="bg-white p-6 rounded-lg shadow-lg relative w-full max-w-md"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                    onClick={onClose}
                    aria-label="Cerrar modal"
                >
                    ✕
                </button>
                {children}
            </div>
        </div>
    );
}
