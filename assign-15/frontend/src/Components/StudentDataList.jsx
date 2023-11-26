import React, { useEffect, useState } from 'react';
import {  deleteStudentData, allStudentList } from '../apiRequest/apiRequest';
import toast, { Toaster } from 'react-hot-toast'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const StudentDataList = () => {
    const [data, setData] = useState([]);
    const [change, setChange] = useState(0)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await allStudentList();
                setData(res);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [change]);

    const onDelete = async (id) => {
        let res = await deleteStudentData(id)
        if (res) {
            toast.success("Delete Completed")
            setChange(new Date().getTime())
        } else {
            toast.error("Delete Fail")
        }
    }

    if (data.length === 0) {
        return (
            <Container>
                <h1>Loading...</h1>
            </Container>
        );
    } else {
        return (
            <Container>
                <div className="row mt-4">
                    <div className="col-md-12">
                        <div className="table-responsive">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        
                                        <th>Name</th>
                                        <th>Gender</th>
                                        <th>Birth Date</th>
                                        <th>Address</th>
                                        <th>nationality</th>
                                        <th>Email</th>
                                        <th>Phone </th>
                                        <th>Admission Date</th>
                                        <th>Courses</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((item, i) => (
                                        <tr key={i}>
                                            
                                            <td>{item.firstName + ' '+ item.lastName}</td>
                                            <td>{item.gender}</td>
                                            <td>{item.dateOfBirth}</td>
                                            <td>{item.address}</td>
                                            <td>{item.nationality}</td>
                                            <td>{item.email}</td>
                                            <td>{item.phone}</td>
                                            <td>{item.admissionDate}</td>
                                            <td>{item.courses}</td>
                                            <td>
                                                <Button onClick={() => { onDelete(item._id) }} variant="danger">Delete</Button>
                                                <Link className='mt-2 btn btn-primary' to={`/saveData?id=${item._id}`} >Edit</Link >
                                            </td>

                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <Toaster
                    position="bottom-center"
                />
            </Container>
        );
    }
};

export default StudentDataList;
