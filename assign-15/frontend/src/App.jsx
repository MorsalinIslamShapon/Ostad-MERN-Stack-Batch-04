import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StudentList from './pages/StudentList';
import StudentRegForm from './pages/StudentRegForm';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<StudentList />} />
          <Route path='/saveData' element={<StudentRegForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
