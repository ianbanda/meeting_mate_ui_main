"use client";
import {RiExpandUpDownFill} from "react-icons/ri";
import {MdDelete} from "react-icons/md";
import {IoMdEye} from "react-icons/io";
import {useEffect, useState} from "react";
import {getMeetings} from "@/api/meetings";
import {FaSearch} from "react-icons/fa";
import PageHeader from "@/components/page_header";
import Modal from "@/components/modal";
import MeetingListing from "@/app/meetings/_components/meeting_listing";
import MeetingView from "@/app/meetings/_components/meeting_view";

export  default function Page(){
    //let title = "ian";
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [start_time, setStartTime] = useState("");
    const [end_time, setEndTime] = useState("");
    const [status, setStatus] = useState("");

    const [meetings,setMeetings] = useState([]);
    const [meeting, setMeeting] = useState({});
    const [currentPage,setCurrentPage] = useState("Meeting Listing");
    const [isModalOpen,setIsModalOpen] = useState(false);
    const [showButton,setShowButton] = useState(true);
    const [showSearch,setShowSearch] = useState(false);

    useEffect(()=>{
        const fetchMeetings = async () => {
            try{

                const data = await getMeetings();
                if(data)
                {
                    setMeetings(data);
                }
            }catch (e){
                setMeetings([]);
            }
        };
        fetchMeetings();
    }, []);

    useEffect(() => {
        if(currentPage === "Meeting Listing"){
            setShowButton(true);
            setShowSearch(true);
        }
        else{
            setShowButton(false);
            setShowSearch(false);
        }
    }, [currentPage]);

    const deleteMeeting = async (id) =>{
        try {
            const response = await fetch('http://localhost:1337/api/web/meetings/delete/'+id+'?id='+id, {
              method: 'DELETE',
              headers: { 'Content-Type': 'application/json' },
              
              //body: JSON.stringify(meetingData),
            });
      
            const result = await response.json();
            //const result = await response;
            if (response.ok) {
              //onSave(result.data); // Callback function to handle success
              //const object = result.json();
              const object = result;
              console.log(object);
              const div = document.querySelector('.meetingId'+id);
              div.remove();
              ()=>setParentPage("View Meeting");
          } else {
              console.log(result.message);
            }
          } catch (error) {
            console.error('Request failed:', error);
          }
    }

    const handleSave = async () => {
        //const [title, setTitle] = useState("");
        //const title = "Ian Brian Banda";
        //alert(title);
        const start_date = "";
        const meetingData = { 
            "title":title,
            "start_time":start_time,
            "end_time":end_time,
            "description":description,
            "status":status,
        };
        
        //const meetingData = { "" };
    
        try {
          const response = await fetch('http://localhost:1337/api/web/meetings/create', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(meetingData),
          });
    
          const result = await response.json();
          //const result = await response;
          if (response.ok) {
            const object = result;
            console.log(object);
            setIsModalOpen(false);
            setMeeting(object);
            setCurrentPage("View Meeting");
            
        } else {
            console.log(result.message);
          }
        } catch (error) {
          console.error('Request failed:', error);
        }
      };

    
    return (
        
        <div className={"container w-full"}>
            <div className="m-4 ">
                <PageHeader title={" Meetings"} subtitle={"Manage Meetings"} hasButton={showButton}
                            buttonText={"Create Meetings"} buttonCallBackFunction={() => setIsModalOpen(true)}/>
                <Modal handleSave={handleSave} title={"Create a Meeting"} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                    <div className={"grid grid-cols-4 gap-1 mb-2"}>
                        <div className={"text-sm font-montLight my-auto"}>Meeting Name</div>
                        <input type={"text"} value={title}
          onChange={(e) => setTitle(e.target.value)}
                               className={"pl-2 col-span-3 w-full border-slate-200 rounded-lg focus:outline-third border-2"}/>
                    </div>

                    <div className={"grid grid-cols-4 gap-1 mb-2"}>
                        <div className={"text-sm font-montLight my-auto"}>Meeting Description</div>
                        <input type={"textarea"} 
                        onChange={(e) => setDescription(e.target.value)}
                               className={"pl-2 col-span-3 w-full border-slate-200 rounded-lg focus:outline-third border-2"}/>
                    </div>
                    <div className={"grid grid-cols-4 gap-1 mb-2"}>
                        <div className={"text-sm font-montLight my-auto"}>Meeting Start Time</div>
                        <input type={"datetime-local"}
                        onChange={(e) => setStartTime(e.target.value)}
                               className={"pl-2 col-span-3 w-full border-slate-200 rounded-lg focus:outline-third border-2"}/>
                    </div>
                    <div className={"grid grid-cols-4 gap-1 mb-2"}>
                        <div className={"text-sm font-montLight my-auto"}>Meeting End Time</div>
                        <input type={"datetime-local"}
                            onChange={(e) => setEndTime(e.target.value)}
                               className={"pl-2 col-span-3 w-full border-slate-200 rounded-lg focus:outline-third border-2"}/>
                    </div>
                    <div className={"grid grid-cols-4 gap-1"}>
                        <div className={"text-sm font-montLight my-auto"}>Status</div>
                        <select
                            className="col-span-3 w-full border-slate-200 rounded-lg focus:outline-third border-2"
                            onChange={(e) => setStatus(e.target.value)}
                        >
                            <option value="" className={"text-sm pl-2"}>Select an option</option>
                            <option value="active" className={"text-sm pl-2"}>Active</option>
                            <option value="inactive" className={"text-sm pl-2"}>In Active</option>
                        </select>
                    </div>
                </Modal>
                { currentPage === "Meeting Listing" &&  <MeetingListing setMeeting={setMeeting} setParentPage={setCurrentPage} deleteMeeting={deleteMeeting} meetings={meetings}></MeetingListing>}
                { currentPage === "View Meeting" &&
                    <MeetingView setParentPage={setCurrentPage} meeting={meeting}></MeetingView>}
            </div>
        </div>
    )
}