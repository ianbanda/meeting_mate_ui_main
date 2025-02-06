import {FaSearch} from "react-icons/fa";
import DeviceInformation from "@/app/devices/_components/device_information";
import DeviceLogs from "@/app/devices/_components/device_logs";
import {useEffect, useState} from "react";
import {IoArrowBackCircle} from "react-icons/io5";

export default function ViewDevice({setParentPage}) {
    const [currentPage,setCurrentPage] = useState("basic info");
    const [showSearch, setShowSearch] = useState(false);
    useEffect(() => {
        if(currentPage === "device logs"){
            setShowSearch(true);
        }else {
            setShowSearch(false);
        }
    },[currentPage])
    return (
        <div>
            <div className={"flex justify-between"}>
                <div className={"flex justify-start gap-2 mt-6"}>
                    <div onClick={() => setParentPage("Device Listing")}
                         className={` flex items-center gap-2 hover:bg-third hover:text-primary px-4 rounded-lg text-sm   py-1  bg-secondary hover:cursor-pointer text-white  `}
                    >
                        <IoArrowBackCircle className={"h-full size-4"} />
                        Back
                    </div>
                    <div onClick={() => setCurrentPage("basic info")}
                         className={` ${currentPage === "basic info" ? "  bg-primary text-white shadow-md " : " bg-secondary hover:cursor-pointer text-white "} ` + ` hover:bg-third hover:text-primary px-4 rounded-lg text-sm   py-1 `}> Basic
                        Information
                    </div>
                    <div onClick={() => setCurrentPage("device logs")}
                         className={` ${currentPage === "device logs" ? "  bg-primary text-white shadow-md " : " bg-secondary hover:cursor-pointer text-white "} ` + ` hover:bg-third hover:text-primary px-4 rounded-lg text-sm   py-1 `}> Device
                        Logs
                    </div>
                </div>
                {
                    showSearch && <div className={"flex justify-end "}>
                        <input type={"text "}
                               className={"mt-6 rounded-l-lg border-transparent focus:outline-none pl-2 "}
                               onChange={(e) => searchCallBackFunction(e.target.value)}/>
                        <div
                            className={"mt-6 bg-white rounded-r-lg hover:cursor-pointer flex items-center justify-center"}>
                            <FaSearch className=" h-full w-full "/>
                        </div>
                    </div>
                }

            </div>
            {
                currentPage === "basic info" && <DeviceInformation/>
            }
            {
                currentPage === "device logs" && <DeviceLogs/>
            }
        </div>
    )
}