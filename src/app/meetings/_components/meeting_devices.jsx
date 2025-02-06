import {IoMdAddCircle} from "react-icons/io";
import Modal from "@/components/modal";
import {useState} from "react";
import Select from "react-select";
import {MdDelete} from "react-icons/md";

export default function MeetingDevices() {
    const [isModalOpen,setIsModalOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleChange = (newSelectedOptions) => {
        setSelectedOptions(newSelectedOptions);
    };

    return (
        <div className={"w-full"}>
            <div className={" shadow flex justify-between p-2"}>

                <div>
                    <span className={"text-sm font-light"}>Devices Allocated to the Meeting</span>
                </div>
                <div>
                    <button onClick={() => {
                        setIsModalOpen(true)
                    }}
                            className={"rounded-lg shadow-md text-primary text-sm font-primary font-montLight hover:cursor-pointer hover:bg-primary hover:text-third bg-third px-4  py-1 flex items-center gap-2"}>
                        <IoMdAddCircle className={"size-4"}/>
                        Add Devices to Meeting
                    </button>
                </div>

            </div>
            <Modal title={"Add Devices to Meetings"} isOpen={isModalOpen} onClose={() => {
                setIsModalOpen(false)
            }}>
                <div>
                    <Select
                        isMulti // Enables multiple selection
                        options={[
                            {value: 'option1', label: 'Option 1'},
                            {value: 'option2', label: 'Option 2'},
                            {value: 'option3', label: 'Option 3'},
                        ]}
                        value={selectedOptions}
                        onChange={handleChange}
                    />
                </div>
            </Modal>
            <div className={"grid grid-cols-4 gap-2 p-2 mt-2 bg-white "}>
                <div className={"col-span-3 text-sm text-black p-2 rounded-lg"}>
                    Tablet Device Chiku
                </div>
                <div className={"flex justify-end items-center"}>
                    <MdDelete className={"hover:cursor-pointer hover:text-third"}/>
                </div>
            </div>
        </div>
    )
}