import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const AppNavBar = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Student DataList</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink className="nav-link"  to={'/'}>Home</NavLink>
            <NavLink className="nav-link"  to={'/saveData'}>AddStudentData</NavLink>
            
          </Nav>
        </Container>
      </Navbar>
    );
};

export default AppNavBar;