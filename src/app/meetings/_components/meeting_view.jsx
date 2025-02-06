import {IoArrowBackCircle} from "react-icons/io5";
import {useState} from "react";
import MeetingMediaFiles from "@/app/meetings/_components/meeting_media_files";
import MeetingDevices from "@/app/meetings/_components/meeting_devices";
import MeetingInformation from "@/app/meetings/_components/meeting_information";

export default function MeetingView({setParentPage, meeting}) {
    const [currentPage, setCurrentPage] = useState("Meeting Information");
    return (<div>
        <div className={"flex flex-col"}>
            <div className={"flex justify-start gap-2 mt-6 mb-3"}>
                <div onClick={() => setParentPage("Meeting Listing")}
                     className={` flex items-center gap-2 hover:bg-third hover:text-primary px-4 rounded-lg text-sm   py-1  bg-secondary hover:cursor-pointer text-white  `}
                >
                    <IoArrowBackCircle className={"h-full size-4"}/>
                    Back
                </div>
                <div onClick={() => setCurrentPage("Meeting Information")}
                     className={` ${currentPage === "Meeting Information" ? "  bg-primary text-white shadow-md " : " bg-secondary hover:cursor-pointer text-white "} ` + ` hover:bg-third hover:text-primary px-4 rounded-lg text-sm   py-1 `}> 
                     Meeting
                    Information
                </div>
                <div onClick={() => setCurrentPage("Meeting Media")}
                     className={` ${currentPage === "Meeting Media" ? "  bg-primary text-white shadow-md " : " bg-secondary hover:cursor-pointer text-white "} ` + ` hover:bg-third hover:text-primary px-4 rounded-lg text-sm   py-1 `}> Meeting Media
                </div>
                <div onClick={() => setCurrentPage("Meeting Devices")}
                     className={` ${currentPage === "Meeting Devices" ? "  bg-primary text-white shadow-md " : " bg-secondary hover:cursor-pointer text-white "} ` + ` hover:bg-third hover:text-primary px-4 rounded-lg text-sm   py-1 `}> Meeting
                    Devices 
                </div>
            </div>
            <div className={"flex mt-4"}>
                { currentPage === "Meeting Media" && <MeetingMediaFiles meeting={meeting}/>}
                { currentPage === "Meeting Devices" && <MeetingDevices meeting={meeting}/>}
                { currentPage === "Meeting Information" && <MeetingInformation meeting={meeting}/>}

            </div>
        </div>
        </div>
    )
}