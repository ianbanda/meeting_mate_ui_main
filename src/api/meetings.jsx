import axios from "axios";
 export const getMeetings = async () => {
    try{
        let response = await axios.get("http://localhost:1337/api/mobile/meetings");
        return response.data;
    }catch(e){
        return e;
    }
}