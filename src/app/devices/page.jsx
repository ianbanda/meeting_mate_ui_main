"use client"
import PageHeader from "@/components/page_header";
import {useEffect, useState} from "react";
import DeviceListing from "@/app/devices/_components/device_listing";
import ViewDevice from "@/app/devices/_components/view_device";
import Modal from "@/components/modal";

export default function Page () {
    const [devices,setDevices] = useState([]);
    const [showButton,setShowButton] = useState(false);
    const [showSearch,setShowSearch] = useState(false);
    const [isModalOpen,setIsModalOpen] = useState(false);

    const [currentPage,setCurrentPage] = useState("Device Listing");
    useEffect(() => {
        if(currentPage === "Device Listing"){
            setShowButton(true);
            setShowSearch(true);
        }else {
            setShowButton(false);
            setShowSearch(false);
        }
    }, [currentPage]);
    return (
        <div className={"container w-full"}>
            <div className="m-4 ">
                <PageHeader title={" Devices"} subtitle={"Manage Devices"} hasButton={showButton}
                            buttonText={"Create Device"} buttonCallBackFunction={() => setIsModalOpen(true)}/>
                {
                    currentPage === "Device Listing" && <DeviceListing setCurrentPage={setCurrentPage}/>
                }
                {
                    currentPage === "View Device" && <ViewDevice setParentPage={setCurrentPage}/>
                }
                <Modal title={"Create Device"} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                    <div className={"grid grid-cols-4 gap-1 mb-2"}>
                        <div className={"text-sm font-montLight my-auto"}>Device Name</div>
                        <input type={"text"}
                               className={"pl-2 col-span-3 w-full border-slate-200 rounded-lg focus:outline-third border-2"}/>
                    </div>

                    <div className={"grid grid-cols-4 gap-1 mb-2"}>
                        <div className={"text-sm font-montLight my-auto"}>Device ID</div>
                        <input type={"text"}
                               className={"pl-2 col-span-3 w-full border-slate-200 rounded-lg focus:outline-third border-2"}/>
                    </div>
                    <div className={"grid grid-cols-4 gap-1"}>
                        <div className={"text-sm font-montLight my-auto"}>Status</div>
                        <select
                            className="col-span-3 w-full border-slate-200 rounded-lg focus:outline-third border-2"
                        >
                            <option value="" className={"text-sm pl-2"}>Select an option</option>
                            <option value="active" className={"text-sm pl-2"}>Active</option>
                            <option value="inactive" className={"text-sm pl-2"}>In Active</option>
                        </select>
                    </div>
                </Modal>
            </div>
        </div>
    );
}