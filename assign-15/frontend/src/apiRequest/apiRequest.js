import axios from 'axios';

const URL = `http://localhost:8080/api/v1/`


export async function allStudentList (sad){
   try{
    let res = await fetch(`${URL}student-data`);
    let jsonData = await res.json() ;

    return jsonData['data']
   }
   catch(e){
    return []
   }
} 





export async function createStudentData (postBody ){
    try{
        let res = await axios.post(`${URL}create-student-data` , postBody);
         if(res.status === 200){
            return true;
         }
         else{
            return false
         }
       }
       catch(e){
        return false
       }
} 


export async function updateStudentData (postBody , id ){
    try{
        let res = await axios.post(`${URL}update-student-data/${id}` , postBody);
         if(res.status === 200){
            return true;
         }
         else{
            return false
         }
       }
       catch(e){
        return false
       }
} 


export async function deleteStudentData(id) {
   try {
       const res = await axios.get(`${URL}delete-student-data/${id}`);
       const jsonData = res.data;

       if (jsonData.status === "success") {
           return true;
       } else {
           return false;
       }
   } catch (error) {
       
       return false;
   }
}

export async function studentDataById(id) {
   try {
       const res = await fetch(`${URL}student-data/${id}`);
       const jsonData = await res.json()
    
     return jsonData.data[0]

   } catch (error) {
       
       return [];
   }
}