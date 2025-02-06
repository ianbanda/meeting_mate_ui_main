"use client"
import {FaSearch} from "react-icons/fa";
import {IoCreate} from "react-icons/io5";

export default function PageHeader({title ="",subtitle = "", hasButton = false, buttonText ="button text", buttonCallBackFunction =() =>{}, hasSearch = false, searchCallBackFunction = () => {} }) {
    return (
        <div className={"flex justify-between border-b-2 border-b-primary pb-4"}>
            <div className={"flex flex-col justify-start"}>
                <div className={"font-primary font-montBold text-secondary "}>{title}</div>
                <div className={"text-sm font-primary font-montLight text-secondary "}>{subtitle}
                </div>
            </div>
            <div className={"flex items-center place-items-center justify-end gap-3"}>
                {hasSearch && ( <div className={"flex justify-end"}>
                        <input type={"text "} className={"rounded-l-lg border-transparent focus:outline-none pl-2 "}  onChange={(e) => searchCallBackFunction(e.target.value)}/>
                        <div
                            className="h-full bg-white rounded-r-lg hover:cursor-pointer flex items-center justify-center"  onClick={() => searchCallBackFunction("")}>
                            <FaSearch className="h-full w-full p-2"/>
                        </div>
                    </div>
                )}
                {hasButton && (<button
                        className={"rounded-lg shadow-md text-primary text-sm font-primary font-montLight hover:cursor-pointer hover:bg-primary hover:text-third bg-third px-4  py-1 flex items-center"} onClick={() => buttonCallBackFunction()}> <IoCreate className={"size-4"} />{buttonText}
                    </button>
                )}


            </div>
        </div>
    )
}