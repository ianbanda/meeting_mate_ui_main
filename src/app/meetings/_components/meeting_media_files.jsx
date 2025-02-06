"use client"
import {FaFolderClosed} from "react-icons/fa6";
import {MdDelete, MdFileUpload} from "react-icons/md";
import {getFileIcon} from "@/utility/getFileIcon";
import {IoMdAddCircle} from "react-icons/io";
import Modal from "@/components/modal";
import {useRef, useState} from "react";
import Select from "react-select";

export default function MeetingMediaFiles({meeting}){
    const [mediaFiles, setMediaFiles] = useState([
        {
            "id":1,
            "name":"file name",
            "ext":".pdf",
            "url":"../ian/banda"
        }
    ]);
    const [isModalOpen,setIsModalOpen] = useState(false);
    const fileInputRef = useRef(null);
    const [file,setFile] = useState(null);
    const [formData, setFormData] = useState({
        mediaName: "",
        mediaType: null,
        location: "root",
        selectedFolder: null,
        file: null,
        meetingId: meeting.id,
    });

    const [name, setName] = useState("");

    

    const appendNewMedia = (mediaFile) => {
        // setMediaFiles([...mediaFiles, `<div className={"w-full flex items-center gap-4 p-4 justify-between   border-white border-b-2"}>
        //         <div className={"flex items-center gap-2 text-sm"}>
        //             {getFileIcon("pdf", 20)} Semester One Grades
        //         </div>
        //         <div>
        //             <MdDelete className={"hover:cursor-pointer hover:text-third"}/>
        //         </div>
        //     </div>`]);
        setMediaFiles((prevFiles) => [...prevFiles, mediaFile]); // Append new file
    };



    // Folder selection options (mock)
    const folderOptions = [
        { value: "folder1", label: "Folder 1" },
        { value: "folder2", label: "Folder 2" },
        { value: "folder3", label: "Folder 3" },
    ];

    // Handle file selection
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setFile(file);
        formData.file = file;
        if (file) {
            setFormData((prev) => ({ ...prev, file }));
        }
    };

    // Trigger file input
    const handleDivClick = () => {
        fileInputRef.current.click();
    };

    // Trigger file input
    const openMediaFile = (mediaFile) => {
        console.log(mediaFile);
        if(mediaFile.ext==".folder")
        {
            alert("folder");
        }
    };

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        if(formData.mediaType.value=="file"&&!file)
        {
            alert("file cannot be empty");
        }

        const submitData = new FormData();
        // console.log("File is \n");
        // console.log(file);
        submitData.append('files', file);
        submitData.append('ref', 'meeting-media');
        submitData.append('meetingId', meeting.id);
        submitData.append('mediaName', formData.mediaName);
        submitData.append('mediaType', formData.mediaType.value);
        
        //formData.mediaType = formData.mediaType.value;
        //console.log(formData)
        try {
        //   const response = await fetch('http://localhost:1337/api/web/meeting-media/create', {
        //   const response = await fetch('http://localhost:1337/api/upload', {
          const response = await fetch('http://localhost:1337/api/custom-upload', {
            method: 'POST',
            //headers: { 'Content-Type': 'application/json' },
            body: submitData,
            //body: JSON.stringify(submitData),
          });
    
          const result = await response.json();
          //const result = await response;
          if (response.ok) {
            const object = result;
            //console.log(object);
            setIsModalOpen(false);
            //setNewMeetingMedia(object);
            //setCurrentPage("View Meeting");
            //document.getElementById('medialist').innerHTML = object;
            appendNewMedia(object);
            
        } else {
            console.log(result.message);
          }
        } catch (error) {
          console.error('Request failed:', error);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this item?")) {
          console.log(`Item with ID ${id} deleted!`);
          // Call your API or update state here
          try 
          {
            const response = await fetch(`/web/meeting-media/${id}`, {
              method: "DELETE",
            });
        
            if (response.ok) {
              alert("File deleted successfully!");
              // Handle UI update (e.g., remove from list)
            } else {
              alert("Failed to delete file");
            }
          } 
          catch (error) {
            console.error("Error deleting file:", error);
          }
        }
    };
      
    
      
    // return <button onClick={() => handleDelete(1)}>Delete</button>;
      

    const handleSave = async (e) => {
        handleSubmit(e);
    };

    //setMediaFiles(['ian','banda']);
    // mediaFiles = ['Ford', 'BMW', 'Audi'];
    return (
        
        <div className={"w-full"}>
            
            <div className={" shadow flex justify-between p-2"}>
                <div>
                    <span className={"text-sm font-light"}>Root:</span>
                </div>
                <div>
                    <button onClick={() =>{setIsModalOpen(true)}}  className={"rounded-lg shadow-md text-primary text-sm font-primary font-montLight hover:cursor-pointer hover:bg-primary hover:text-third bg-third px-4  py-1 flex items-center gap-2"}><IoMdAddCircle className={"size-4"} />
                        Add File or Folder</button>
                </div>

            </div>
            <Modal handleSave={handleSave} title={"Add a file or Folder"} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <form onSubmit={handleSubmit}>
                    {/* Media Name */}
                    <div className="grid grid-cols-4 gap-1 mb-2">
                        <label className="text-sm font-montLight my-auto">Media Name</label>
                        <input
                            type="text"
                            name="mediaName"
                            value={formData.mediaName}
                            onChange={handleChange}
                            className="pl-2 col-span-3 w-full border-slate-200 rounded-lg focus:outline-third border-2"
                        />
                    </div>
                    {/* Location Selection */}
                    <div className="grid grid-cols-4 gap-2">
                        <label className="text-sm font-montLight my-auto">Location</label>
                        <div className="col-span-3 flex gap-2 py-4">
                            <label className="flex items-center space-x-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="location"
                                    value="root"
                                    checked={formData.location === "root"}
                                    onChange={handleChange}
                                    className="accent-secondary"
                                />
                                <span className="text-sm">In Root</span>
                            </label>

                            <label className="flex items-center space-x-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="location"
                                    value="folder"
                                    checked={formData.location === "folder"}
                                    onChange={handleChange}
                                    className="accent-secondary"
                                />
                                <span className="text-sm">Specific Folder</span>
                            </label>
                        </div>
                    </div>

                    {/* Folder Selection (Only when "Specific Folder" is selected) */}
                    {formData.location === "folder" && (
                        <div className="grid grid-cols-4 gap-1 mb-2 mt-2">
                            <label className="text-sm font-montLight my-auto">Select Folder</label>
                            <Select
                                className="col-span-3"
                                options={folderOptions}
                                value={formData.selectedFolder}
                                onChange={(selected) => setFormData((prev) => ({...prev, selectedFolder: selected}))}
                                placeholder="Search or select a folder"
                                isSearchable
                            />
                        </div>
                    )}


                    {/* Media Type Selection */}
                    <div className="grid grid-cols-4 gap-1 mb-2">
                        <label className="text-sm font-montLight my-auto">Select Media Type</label>
                        <Select
                            className="col-span-3"
                            options={[
                                {value: "file", label: "File"},
                                {value: "folder", label: "Folder"},
                            ]}
                            value={formData.mediaType}
                            onChange={(selected) => setFormData((prev) => ({...prev, mediaType: selected}))}
                            placeholder="Select an option"
                            isSearchable
                        />
                    </div>

                    {/* File Upload (Only when "File" is selected) */}
                    {formData.mediaType?.value === "file" && (
                        <div
                            className="w-full h-2/3 border-dashed mt-2 border-2 border-gray-400 hover:border-secondary hover:cursor-pointer
                                   items-center place-content-center text-center flex justify-center"
                            onClick={!formData.file ? handleDivClick : undefined}
                        >
                            <div className="text-sm text-secondary flex flex-col justify-center items-center">
                                {formData.file ? (
                                    <div
                                        className="w-full flex items-center gap-4 p-4 justify-between border-white border-b-2">
                                        <div className="flex items-center gap-2 text-sm">
                                            <MdFileUpload className="size-6"/> {formData.file.name}
                                        </div>
                                        <MdDelete
                                            onClick={() => setFormData((prev) => ({...prev, file: null}))}
                                            className="hover:cursor-pointer hover:text-third"
                                        />
                                    </div>
                                ) : (
                                    <>
                                        <MdFileUpload className="size-8"/>
                                        Upload File
                                    </>
                                )}
                            </div>
                            <input
                                type="file"
                                ref={fileInputRef}
                                className="hidden"
                                onChange={handleFileChange}
                            />
                        </div>
                    )}







                </form>
            </Modal>
           
            {<div className="w-full p-4">
                {mediaFiles.map((mediaFile) => (
                    // <div key={index} className="bg-blue-500 text-white p-4 rounded-lg">
                    // Div {index + 1}
                    // </div>
                    <div  key={mediaFile.id} className={"w-full flex items-center gap-4 p-4 justify-between   border-white border-b-2"}>
                        <div onClick={openMediaFile(mediaFile)} className={"flex items-center gap-2 text-sm"}>
                            {getFileIcon(mediaFile.ext.slice(1), 20)} {mediaFile.name}
                        </div>
                        <div>
                            <MdDelete  onClick={() => handleDelete(mediaFile.id)} className={"hover:cursor-pointer hover:text-third"} />
                        </div>
                    </div>
                ))}
            </div>}
            
        </div>
    )
}