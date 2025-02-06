"use client"
import {RiExpandUpDownFill} from "react-icons/ri";

export default function DeviceLogs() {
    return (
        <div className={"mt-6"}>
            <div className={"grid grid-cols-3 gap-2"}>
                <div className={"font-montLight text-sm flex items-center"}> <RiExpandUpDownFill className={"hover:cursor-pointer"} /> Accessed By</div>
                <div className={"font-montLight text-sm flex items-center"}> <RiExpandUpDownFill className={"hover:cursor-pointer"} /> Meeting Tile</div>
                <div className={"font-montLight text-sm flex items-center"}> <RiExpandUpDownFill className={"hover:cursor-pointer"} />Time of Use</div>
            </div>
            <div className={"group grid grid-cols-3 gap-2 bg-white mt-2 px-4 py-2 hover:shadow-md hover:shadow-third hover:transition ease-in-out duration-600"}>
                <div className={"group-hover:text-primary font-mono font-extralight"}> Jeremiah Phalula </div>
                <div className={"group-hover:text-primary font-mono px-2"}> ScholarMis Meetings </div>
                <div className={"group-hover:text-primary font-mono px-6"}> 01 February 2025</div>
            </div>
        </div>
    )
}