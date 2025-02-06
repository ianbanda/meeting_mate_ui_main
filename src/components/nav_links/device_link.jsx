"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import {HiOutlineDeviceMobile} from "react-icons/hi";
export default function DeviceLink({}) {
    const pathname = usePathname();
    const isActive = pathname === "/devices";
    return <Link href={"/devices"}>
        <div
            className={` group text-white font-serif p-4 border-transparent hover:border-b-2 hover:border-blue-300 hover:bg-third hover:cursor-pointer duration-300 ease-in-out transition grid grid-cols-3 justify-between place-content-center items-center ${isActive ? "border-b-2 border-secondary bg-third" : ""} `}>

            <HiOutlineDeviceMobile className={`size-5 items-start place-items-start group-hover:text-secondary ${isActive ? "text-secondary" : ""}`}/>
            <div
                className={` text-sm  group-hover:text-secondary flex justify-start font-primary font-montLight ${isActive ? "text-secondary" : "text-white"} `}> Devices
            </div>
        </div>
    </Link>
}