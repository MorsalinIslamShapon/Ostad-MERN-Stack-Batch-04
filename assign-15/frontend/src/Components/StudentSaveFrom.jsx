import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import toast, { Toaster } from 'react-hot-toast';
import { studentDataById, createStudentData, updateStudentData } from '../apiRequest/apiRequest';
import { useNavigate } from 'react-router-dom';
const StudentSaveFrom = () => {
    let navigate = useNavigate();
    const [FormValue, setFromValue] = useState({
        firstName: "",
        lastName: "",
        gender: "",
        dateOfBirth: "",
        nationality: "",
        address: "",
        email: "",
        phone: "",
        admissionDate: "",
        courses: ""
    })

    let [UpdateId, setUpdateId] = useState(null)

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id')
        setUpdateId(id);

        (async () => {
            if (id !== null) {
                FillFrom(id)

            }
        })()
    }, [])


    const FillFrom = async (id) => {
        let res = await studentDataById(id)

        setFromValue({
            firstName: res.firstName,
            lastName: res.lastName,
            gender: res.gender,
            dateOfBirth: res.dateOfBirth,
            nationality: res.nationality,
            address: res.address,
            email: res.email,
            phone: res.phone,
            admissionDate: res.admissionDate,
            courses: res.courses,
        })
    }

    const InputOnChange = (name, value) => {
        setFromValue((prevFormValue) => ({
            ...prevFormValue,
            [name]: value,
        }));
    };
    const Save = async () => {
         if (FormValue.firstName.length=== 0) {
            toast.error('firstName Required')
        }
        else if (FormValue.lastName.length === 0) {
            toast.error('lastName Required')
        }
        else if (FormValue.gender.length === 0) {
            toast.error('Task Title Required')
        }
        else if (FormValue.dateOfBirth.length === 0) {
            toast.error('dateOfBirth Required')
        }
        else if (FormValue.nationality.length === 0) {
            toast.error('nationality Required')
        }
        else if (FormValue.address.length === 0) {
            toast.error('address Required')
        }
        else if (FormValue.email.length === 0) {
            toast.error('Email Required')
        }
        else if (FormValue.phone.length === 0) {
            toast.error('phone Required')
        }
        else if (FormValue.admissionDate.length === 0) {
            toast.error('admissionDate Required')
        }
        else if (FormValue.courses.length === 0) {
            toast.error('courses Required')
        }
        else {
            if (UpdateId === null) {
                let res = await createStudentData(FormValue);
                if (res) {
                    toast.success("Student Data Created")
                    navigate("/")
                }
                else {
                    toast.error("Request Fail")
                }
            } else {

                let res = await updateStudentData(FormValue, UpdateId);
                if (res) {
                    toast.success("Student Data  Update")
                    navigate("/")
                }
                else {
                    toast.error(" Update Request Fail")
                }
            }


        }
    }
    return (
        <Container className='mt-5'>
            <div className="row ">

            <div className="col-md-4 p-2" >
                    <label className="from-label ">First Name</label>
                    <input value={FormValue.firstName} onChange={(e) => { InputOnChange('firstName', e.target.value) }} type="text" className='form-control' placeholder='First Name' />
                </div>

            <div className="col-md-4 p-2" >
                    <label className="from-label ">Last Name</label>
                    <input value={FormValue.lastName} onChange={(e) => { InputOnChange('lastName', e.target.value) }} type="text" className='form-control' placeholder='Last Name' />
                </div>

            <div className="col-md-4 p-2" >
                    <label className="from-label ">Gender</label>
                    <input value={FormValue.gender} onChange={(e) => { InputOnChange('gender', e.target.value) }} type="text" className='form-control' placeholder='Gender' />
                </div>

            <div className="col-md-4 p-2" >
                    <label className="from-label ">Date of Birth</label>
                    <input value={FormValue.dateOfBirth} onChange={(e) => { InputOnChange('dateOfBirth', e.target.value) }} type="text" className='form-control' placeholder='Date Of Birth' />
                </div>

            <div className="col-md-4 p-2" >
                    <label className="from-label ">Nationality</label>
                    <input value={FormValue.nationality} onChange={(e) => { InputOnChange('nationality', e.target.value) }} type="text" className='form-control' placeholder='nationality' />
                </div>

            <div className="col-md-4 p-2" >
                    <label className="from-label ">Address</label>
                    <input value={FormValue.address} onChange={(e) => { InputOnChange('address', e.target.value) }} type="text" className='form-control' placeholder='address' />
                </div>

                <div className="col-md-4 p-2" >
                    <label className="from-label ">Your Email Address</label>
                    <input value={FormValue.email} onChange={(e) => { InputOnChange('email', e.target.value) }} type="email" className='form-control' placeholder='email' />
                </div>
               
                <div className="col-md-4 p-2" >
                    <label className="from-label ">Phone Number</label>
                    <input value={FormValue.phone} onChange={(e) => { InputOnChange('phone', e.target.value) }} type="text" className='form-control' placeholder='phone number' />
                </div>
                <div className="col-md-4 p-2" >
                    <label className="from-label">Admission Date</label>
                    <input value={FormValue.admissionDate} onChange={(e) => { InputOnChange('admissionDate', e.target.value) }} type="text" className='form-control' placeholder='admission date' />
                </div>
                <div className="col-md-4 p-2" >
                    <label className="from-label">Courses</label>
                    <input value={FormValue.courses} onChange={(e) => { InputOnChange('courses', e.target.value) }} type="text" className='form-control' placeholder='courses' />
                </div>
                <div className="col-md-4 p-2" >
                    <label className="from-label">Save Change</label>
                    <br />
                    <Button onClick={() => { Save() }} variant="success">Submit</Button>
                </div>
            </div>
            <Toaster
                position="bottom-center"
            />
        </Container>
    );
};

export default StudentSaveFrom;