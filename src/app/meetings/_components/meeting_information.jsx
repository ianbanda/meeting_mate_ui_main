"use client";
import { IoMdAddCircle, IoMdSwitch } from "react-icons/io";
import { useState } from "react";
//const [isModalOpen, setIsModalOpen] = useState(false);

export default function MeetingInformation({meeting}) {

    return (
        <div className={"w-full"}>
            <div className={" shadow flex justify-between p-2"}>

                    <div className={"max-w-lg w-full bg-white shadow-lg rounded-lg p-6"}>
                        <h2 className={"text-2xl font-semibold text-gray-800 mb-2"}>Title: {meeting.title}</h2>

                        <div className={"text-gray-600 text-sm mb-4"}>
                            <p><strong>From</strong> {meeting.start_time}</p>
                            <p><strong>To:</strong> {meeting.end_time}</p>
                        </div>

                        <p className={"text-gray-700 mb-4"}>
                            {meeting.description}
                        </p>

                        <a href="#" className={"block text-center bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"} onClick={() => {
                        setIsModalOpen(true)
                    }}>
                            <IoMdSwitch className={"size-4"} />
                            Edit Meeting
                        </a>
                    </div>
            </div>
        </div>
    )
}