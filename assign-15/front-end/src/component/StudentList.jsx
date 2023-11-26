import React, {useEffect, useState} from 'react';
import {deleteStudentRequest, studentListRequest} from "../apiRequest/studentAPIRequest.js";
import {toast, Toaster} from "react-hot-toast";
import {Link} from "react-router-dom";
import FullscreenLoder from "./FullscreenLoder.jsx";

const StudentList = () => {

    let [data,setData]=useState([]);
    let [change,setChange]=useState(0);

    useEffect(() => {
        (async ()=>{
          let res= await studentListRequest();
          setData(res);
        })()
    }, [change]);

    const onDelete =async(id) => {
       let res= await deleteStudentRequest(id);
       if(res){
           toast.success("Delete completed");
           setChange(new Date().getTime())
       }else {
           toast.error("Delete fail")
       }
    }


    if(data.length===0){
        return (
            <div>
                <FullscreenLoder/>
            </div>
        );
    }
    else {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                      <tr>
                                          <th>First Name</th>
                                          <th>Last Name</th>
                                          <th>Gender</th>
                                          <th>Date Of Birth</th>
                                          <th>Nationality</th>
                                          <th>Address</th>
                                          <th>Email</th>
                                          <th>Phone</th>
                                          <th>Admission Date</th>
                                          <th>Courses</th>
                                          <th>Action</th>
                                      </tr>
                                </thead>
                                <tbody>
                                     {
                                         data.map((item,i)=>{
                                             return(
                                                 <tr key={i}>
                                                     <th>{item['firstName']}</th>
                                                     <th>{item['lastName']}</th>
                                                     <th>{item['gender']}</th>
                                                     <th>{item['dateOfBirth']}</th>
                                                     <th>{item['nationality']}</th>
                                                     <th>{item['address']}</th>
                                                     <th>{item['email']}</th>
                                                     <th>{item['phone']}</th>
                                                     <th>{item['admissionDate']}</th>
                                                     <th>{item['courses']}</th>
                                                     <th>
                                                         <button onClick={()=>{onDelete(item['_id'])}} className="btn btn-danger p-2 mb-2">Delete</button>
                                                         <Link className="btn mx-2 btn-success" to={"/registration?id="+item['_id']}>Edit</Link>
                                                     </th>
                                                 </tr>
                                             )
                                         })
                                     }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <Toaster position="bottom-center" />
            </div>
        );
    }
};

export default StudentList;