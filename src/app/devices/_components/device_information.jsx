"use client"
import {useState} from "react";

export default function DeviceInformation() {
    const [mode,setMode] = useState("view");
    return (
        <div className={"bg-white shadow-md mt-6"}>
            <div className={"flex justify-between border-b-2 border-b-primary p-4"}>
                <div className={"flex items-center justify-start font-montBold"}>Device Information</div>
                <button
                    onClick={() => setMode("edit")}
                    className={"text-sm rounded-lg shadow-md text-primary font-primary font-montLight hover:cursor-pointer hover:bg-primary hover:text-third bg-third px-4  "}>
                    Edit Details
                </button>
            </div>

            <div className={"grid grid-cols-7 gap-2 mt-2 p-4 group "}>
                <div className={"font-montLight text-zinc-500 group-hover:text-secondary "}>Device Name</div>
                <div className="col-span-4 items-center place-items-center p-3">
                    <hr className="border-t group-hover:border-secondary border-gray-300 w-full"/>
                </div>
                <div className={"col-span-2  items-end place-items-end text-end "}> {mode === "edit" ?
                    <input type={"text "} value={"Jeremiah Phalula"}
                           className={"rounded-lg items-center text-center border-2 border-secondary outline-secondary pl-2 mr-2"}/> :
                    <span className={"group-hover:text-secondary"}>Jeremiah Phalula</span>}
                </div>
            </div>
            <div className={"grid grid-cols-3 gap-2 mt-2 px-4 pb-4"}>
                <div className={"font-montLight text-zinc-500"}>Device ID:</div>

                <div className={"col-span-2 items-end place-items-end text-end "}> {mode === "edit" ?
                    <input type={"text "} value={"00JFN-JFKNSLFK-O0O"}
                           className={"rounded-lg items-center text-center border-2 border-secondary outline-secondary pl-2 "}/> :
                    <span>00JFN-JFKNSLFK-O0O</span>}
                </div>
            </div>
            <div className={"grid grid-cols-3 gap-2 mt-2 px-4 "}>
                <div className={"font-montLight text-zinc-500"}>Status</div>

                <div className={"col-span-2 items-end place-items-end text-end transition  ease-in-out duration-200 "}> {mode === "edit" ?
                    <input type={"text "} value={"Active"}
                           className={"rounded-lg items-center text-center border-2 border-secondary outline-secondary pl-2 "}/> :
                    <div className={"items-start text-start"}>Active</div>}
                </div>
            </div>
        </div>
    )
}