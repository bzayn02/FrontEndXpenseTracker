import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function TopNav() {
    const navigate = useNavigate();
    const [user, setUser] = useState({});

    useEffect(() => {
        const userInfo = JSON.parse(sessionStorage.getItem('user'));
        setUser(userInfo);
    }, []);

    const handleOnLogout = () => {
        sessionStorage.removeItem('user');
        navigate('/');
    };

    return (
        <Navbar className="bg-slate-600" expand="md">
            <Container className="py-4">
                <div className="no-underline text-gray-300 hover:text-white font-serif text-3xl hover:cursor-pointer">
                    Xpense-Tracker
                </div>
                <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    className="bg-white "
                />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {user?._id ? (
                            <div>
                                <span className="text-2xl text-gray-300 mr-5 font-serif">
                                    Welcome {user.name}
                                </span>
                                <i
                                    className="fa fa-sign-out text-2xl text-gray-100 hover:cursor-pointer"
                                    aria-hidden="true"
                                    onClick={handleOnLogout}
                                ></i>
                            </div>
                        ) : (
                            <>
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
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default TopNav;
