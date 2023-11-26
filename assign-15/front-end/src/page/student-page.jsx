import React from 'react';
import AppNavBar from "../component/AppNavBar.jsx";
import StudentRegistrationForm from "../component/studentRegistrationForm.jsx";

const StudentPage = () => {
    return (
        <div>
            <AppNavBar/>
            <StudentRegistrationForm/>
        </div>
    );
};

export default StudentPage;