import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
// import GreetingComponent from '../sign/greeting';
// import Toast from './Toast';


const NavbarB = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Kafene</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/orders" style={{
              textDecoration: "none",
              color: "white",
              marginLeft: "8px"
            }}>Orders</Link>
            <Link to="/items" style={{
              textDecoration: "none",
              color: "white",
              marginLeft: "20px"
            }}>Products</Link>
            <Link to="/users" style={{
              textDecoration: "none",
              color: "white",
              marginLeft: "20px"
            }}>Users</Link>
            <Link to="/" style={{
              textDecoration: "none",
              color: "white",
              marginLeft: "20px"
            }}>Logout</Link>
          </Nav>
        </Container>
      </Navbar>
      {/* <Toast/> */}
    </>
  );
}

export default NavbarB;
