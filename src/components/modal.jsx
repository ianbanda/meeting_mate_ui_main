"use client";
import { useState } from "react";
import { useEffect } from "react";
import {FaSave} from "react-icons/fa";


export default function Modal({ isOpen, onClose, title, children, handleSave = ()=>{}}) {
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") onClose(); // Close on Escape key press
        };
        if (isOpen) {
            document.addEventListener("keydown", handleKeyDown);
        }
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    //const [data, setData] = useState(null);    
    
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center">
            <div
                className="absolute left-1/2 -translate-x-1/2 bg-white p-6 rounded-lg shadow-xl w-2/4 top-20">

                {/* Modal Header */}
                <div className="flex justify-between items-center mb-4 border-b-2 border-b-black">
                    <h2 className=" text-md font-montRegular text-black ">{title}</h2>
                    <button onClick={onClose} className="text-primary hover:text-third">
                        ✕
                    </button>
                </div>

                {/* Modal Content */}
                <div>{children}</div>

                {/* Close Button */}
                <div className="mt-4 flex justify-end">
                    <button onClick={handleSave} className="flex items-center gap-2 text-center bg-primary hover:bg-third hover:text-primary text-white px-4 py-1 rounded-lg text-sm">
                        <FaSave /> Save
                    </button>
                </div>
            </div>
        </div>
    );

    

    
}
