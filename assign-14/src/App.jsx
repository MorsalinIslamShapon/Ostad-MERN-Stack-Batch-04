import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TeamPage from './pages/TeamPage';
import ServicePage from './pages/ServicePage';
import ProjectPage from './pages/ProjectPage';
import TestimonialsPage from './pages/TestimonialsPage';

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/team' element={<TeamPage/>}/>
        <Route path='/service' element={<ServicePage/>}/>
        <Route path='/project' element={<ProjectPage/>}/>
        <Route path='/testimonials' element={<TestimonialsPage/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;