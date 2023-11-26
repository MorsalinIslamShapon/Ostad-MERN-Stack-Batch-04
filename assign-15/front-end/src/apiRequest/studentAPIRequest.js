import axios from "axios";

export async function studentListRequest(){
    try {
        let res=await fetch("http://localhost:5010/api/v1/list-student");
        let JSONData=await res.json();
        return JSONData['data'];
    }catch (e) {
        return []
    }
}

export async function studentByIDRequest(id){
    try {
        let res=await fetch("http://localhost:5010/api/v1/student-by-id/"+id);
        let JSONData=await res.json();
        return JSONData['data'][0];
    }catch (e) {
        return []
    }
}








export async function registrationRequest(postBody){
    try {
        let res=await axios.post("http://localhost:5010/api/v1/student-registration",postBody);
        if(res.status===200){
            return true;
        }
        else{
            return  false
        }

    }catch (e) {
        return  false
    }
}



export async function updateStudentRequest(postBody,id){
    try {
        let res=await axios.post("http://localhost:5010/api/v1/update-student/"+id,postBody);
        if(res.status===200){
            return true;
        }
        else{
            return  false
        }

    }catch (e) {
        return  false
    }
}



export async function deleteStudentRequest(id){
    try {
        let res=await fetch("http://localhost:5010/api/v1/delete-student/"+id);
        let JSONData=await res.json();
        if(JSONData['status']==="success"){
            return  true;
        }else{
            return  false;
        }
    }catch (e) {
        return  false;
    }
}