import {RiExpandUpDownFill} from "react-icons/ri";
import {MdDelete} from "react-icons/md";
import {IoMdEye} from "react-icons/io";

export default function DeviceListing({setCurrentPage})
{
    return (
        <div>
            <div className={"grid grid-cols-7 mt-9 "}>
                <div
                    className={"col-span-4 flex items-center  text-sm  text-primary hover:text-third font-primary "}>
                    <RiExpandUpDownFill className={"hover:cursor-pointer"}/>Device Name
                </div>
                <div
                    className={"col-span-2 text-center flex items-center font-montRegular hover:text-third  text-primary  text-sm font-primary"}>
                    <RiExpandUpDownFill className={"hover:cursor-pointer"}/> Device ID
                </div>
                <div
                    className={"text-center font-montRegular text-primary hover:text-third text-sm font-primary"}>Actions
                </div>
            </div>
            <div className={"grid grid-cols-7 mt-2 py-2 bg-white  "}>
                <div className={"col-span-4 pl-4"}>
                    <div className={"font-medium "}>Tablet Number One</div>
                    <div className={"font-light text-sm "}>Currently in a meeting</div>
                </div>
                <div
                    className={"bg-white font-mono text-sm col-span-2 flex flex-wrap my-auto px-3 text-center justify-start place-content-start items-start"}> 0098478-908829-93
                </div>
                <div
                    className={"text-center flex gap-2 items-center place-items-center place-content-center "}>
                    <MdDelete className={"hover:cursor-pointer hover:text-third"}/> <IoMdEye
                    className={"hover:cursor-pointer hover:text-third"} onClick={() => {setCurrentPage("View Device")}}/>
                </div>
            </div>
        </div>
    );
}