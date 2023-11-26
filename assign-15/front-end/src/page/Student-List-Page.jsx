import React from 'react';
import AppNavBar from "../component/AppNavBar.jsx";
import StudentList from "../component/StudentList.jsx";

const StudentListPage = () => {
    return (
        <div>
            <AppNavBar/>
            <StudentList/>
        </div>
    );
};

export default StudentListPage;