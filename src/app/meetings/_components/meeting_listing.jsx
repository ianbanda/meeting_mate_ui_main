"use client";
import {MdDelete} from "react-icons/md";
import {IoMdEye} from "react-icons/io";
import {RiExpandUpDownFill} from "react-icons/ri";
import {useState} from "react";

// nst [meeting, setMeeting] = useState({});

export default function MeetingListing({setMeeting,setParentPage,deleteMeeting,meetings}){
    // const [meeting, setMeeting] = useState({});
    return (
        
        <div>

            <div className={"grid grid-cols-8 mt-9 "}>
                <div
                    className={"col-span-4 flex items-center font-montRegular text-primary text-sm hover:text-third font-primary "}>
                    <RiExpandUpDownFill className={"hover:cursor-pointer"}/>Title
                </div>
                <div
                    className={"col-span-2 text-center flex items-center font-montRegular text-sm hover:text-third  text-primary font-primary"}>
                    <RiExpandUpDownFill className={"hover:cursor-pointer"}/> Duration
                </div>
                <div
                    className={"text-center flex items-center font-montRegular text-primary text-sm hover:text-third  font-primary"}>
                    <RiExpandUpDownFill className={"hover:cursor-pointer"}/> No of Allocated Devices
                </div>
                <div
                    className={"text-center text-sm font-montRegular text-primary hover:text-third  font-primary"}>Actions
                </div>
            </div>
            {meetings.map((meeting) => {
                return (<div key={meeting.id} className={"bg-white shadow-md hover:bg-slate-50 "}>
                    <div className={`grid grid-cols-8 mt-2 py-2 meetingId${meeting.id}`}>
                        <div className={"col-span-2 pl-4"}>
                            <div className={"font-medium "}>{meeting.title}</div>
                            <div className={"font-extralight text-sm "}>{meeting.description}</div>
                        </div>
                        <div
                            className={"items-center text-sm place-items-center flex text-center justify-center col-span-2"}>
                                    <span
                                        className={"rounded-lg text-center bg-green-300 px-4 items-center place-content-center flex "}>published</span>
                        </div>


                        <div
                            className={" col-span-2 flex flex-wrap justify-center text-center items-center text-sm"}> {meeting.start_time} - {meeting.end_time}
                        </div>
                        <div className={"text-center items-center place-content-center place-items-center"}>4
                            Devices
                        </div>
                        <div
                            className={"text-center flex gap-2 items-center place-items-center place-content-center "}>
                            <MdDelete className={"hover:cursor-pointer hover:text-third"} onClick={() => {deleteMeeting(meeting.id)}}/> <IoMdEye
                            className={"hover:cursor-pointer hover:text-third"} onClick={() => {setParentPage("View Meeting"); setMeeting(meeting);}}/>
                        </div>
                    </div>

                </div>)
            })}

        </div>


    )
}