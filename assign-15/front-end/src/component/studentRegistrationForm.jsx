import React, {useEffect, useState} from 'react';
import {toast, Toaster} from "react-hot-toast";
import {useNavigate} from "react-router-dom";
import {registrationRequest, studentByIDRequest, updateStudentRequest} from "../apiRequest/studentAPIRequest.js";
const StudentRegistrationForm = () => {

    let navigate=useNavigate();
    let [FormValue,SetFormValue]=useState({firstName:"", lastName:"", gender:"", dateOfBirth:"",nationality:"",address:"",email:"",phone:"",courses:""})
    let [UpdateID,SetUpdateID]=useState(null);


    useEffect(() => {
        (async ()=>{
            const urlParams = new URLSearchParams(window.location.search);
            const id = urlParams.get('id');
            SetUpdateID(id)
            if(id!==null){
               await FillForm(id)
            }
        })()
    }, []);
    
    const FillForm =async (id) => {
       let res= await studentByIDRequest(id)
       SetFormValue({
           firstName:res['firstName'],
           lastName:res['lastName'],
           gender:res['gender'],
           dateOfBirth:res['dateOfBirth'],
           nationality:res['nationality'],
           address:res['address'],
           email:res['email'],
           phone:res['phone'],
           courses:res['courses'],


       })
    }


    const InputOnChange = (name,value) => {
        SetFormValue((FormValue)=>({
            ...FormValue,
            [name]:value
        }))
    }

    const Save = async () => {
        if(FormValue.firstName.length===0){
            toast.error("Email Required !")
        }
        else if(FormValue.lastName.length===0){
            toast.error("Title Required !")
        }
        else if(FormValue.gender.length===0){
            toast.error("Gender Required !")
        }
        else if(FormValue.dateOfBirth.length===0){
            toast.error("Date Of Birth Required !")
        }
        else if(FormValue.nationality.length===0){
            toast.error("Nationality Required !")
        }
        else if(FormValue.address.length===0){
            toast.error("Address Required !")
        }
        else if(FormValue.email.length===0){
            toast.error("Email Required !")
        }
        else if(FormValue.phone.length===0){
            toast.error("Phone Required !")
        }
        else if(FormValue.courses.length===0){
            toast.error("Courses Required !")
        }
        else{
            if(UpdateID==null){
                let res=await registrationRequest(FormValue);
                if(res){
                    toast.success("Registration Completed");
                    navigate("/");
                }
                else{
                    toast.error("Registration Fail");
                }
            }
            else{
                let res=await updateStudentRequest(FormValue,UpdateID);
                if(res){
                    toast.success("Update Completed");
                    navigate("/");
                }
                else{
                    toast.error("Update Fail");
                }
            }


        }

    }


    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4 p-2">
                    <label className="form-label">First Name</label>
                    <input value={FormValue.firstName} onChange={(e)=>InputOnChange('firstName',e.target.value)} type="text" className="form-control" placeholder="Frist Name"/>
                </div>
                <div className="col-md-4 p-2">
                    <label className="form-label">Last Name</label>
                    <input value={FormValue.lastName} onChange={(e)=>InputOnChange('lastName',e.target.value)} type="text" className="form-control" placeholder="Last Name"/>
                </div>
                <div className="col-md-4 p-2">
                    <label className="form-label">Gender</label>
                    <br/>
                    <input checked={FormValue.gender === 'male'} onChange={(e)=>InputOnChange('gender','male')} name='gender' className='mx-1' type='radio'/>Male
                    <input checked={FormValue.gender ==='female'} onChange={(e)=>InputOnChange('gender','female')} name='gender' className='mx-1' type='radio'/>Female
                </div>
                 <div className="col-md-4 p-2">
                    <label className="form-label">Date Of Birth</label>
                    <input value={FormValue.dateOfBirth} onChange={(e)=>InputOnChange('dateOfBirth',e.target.value)}  type="text" className="form-control" placeholder="MM-DD-YY"/>
                </div>
                <div className="col-md-4 p-2">
                    <label className="form-label">Nationality</label>
                    <input value={FormValue.nationality} onChange={(e)=>InputOnChange('nationality',e.target.value)}  type="text" className="form-control" placeholder="Nationality"/>
                </div>
                <div className="col-md-4 p-2">
                    <label className="form-label">Address</label>
                    <input value={FormValue.address} onChange={(e)=>InputOnChange('address',e.target.value)}  type="text" className="form-control" placeholder="Address"/>
                </div>
                <div className="col-md-4 p-2">
                    <label className="form-label">Email</label>
                    <input value={FormValue.email} onChange={(e)=>InputOnChange('email',e.target.value)}  type="email" className="form-control" placeholder="Email"/>
                </div>
                <div className="col-md-4 p-2">
                    <label className="form-label">Phone</label>
                    <input value={FormValue.phone} onChange={(e)=>InputOnChange('phone',e.target.value)}  type="text" className="form-control" placeholder="Phone"/>
                </div>
                <div className="col-md-4 p-2">
                    <label className="form-label mx-1">Courses</label>
                    <select className='mx-1' value={FormValue.courses} onChange={(e)=>InputOnChange('courses',e.target.value)}>
                        <option className='mx-1' value=''>choose a courses</option>
                        <option className='mx-1' value='mern'>Mern</option>
                        <option className='mx-1' value='cyber security'>cyber security</option>
                    </select>
                </div>
                <div className="col-md-4 p-2">
                    <label className="form-label">Save Change</label><br/>
                    <button onClick={Save} className="btn w-100 btn-success">Submit</button>
                </div>
            </div>
            <Toaster position="bottom-center" />
        </div>
    );
};

export default StudentRegistrationForm;
