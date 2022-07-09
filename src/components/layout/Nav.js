import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function TopNav() {
    return (
        <Navbar className="bg-slate-600" expand="md">
            <Container className="py-4">
                <Link
                    className="no-underline text-gray-300 hover:text-white font-serif text-xl"
                    to="/"
                >
                    Xpense-Tracker
                </Link>
                <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    className="bg-white "
                />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link
                            className="text-center no-underline border-1 m-2 rounded-md p-2 text-gray-300 space-x-2 hover:text-white hover:border-white"
                            to="/"
                        >
                            Log In
                        </Link>
                        <Link
                            className="text-center no-underline text-gray-300  border-1 m-2 p-2 rounded-md hover:text-black hover:bg-white"
                            to="/register"
                        >
                            Register
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default TopNav;
