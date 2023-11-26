import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import StudentListPage from "./page/Student-List-Page.jsx";
import StudentPage from "./page/student-page.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<StudentListPage/>}/>
                <Route path="/registration" element={<StudentPage/>}/>
            </Routes>

        </BrowserRouter>
    );
};

export default App;