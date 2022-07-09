import React, { useRef, useState } from 'react';
import { Alert, Form, Spinner } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { LoginUser } from '../../helper/AxiosHelper';

const Login = () => {
    const navigate = useNavigate();
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        if (!email || !password) {
            return alert('Please enter email and password to log in.');
        }
        setIsLoading(true);
        const { data } = await LoginUser({ email, password });
        setIsLoading(false);

        if (data.status === 'success') {
            const { name, email, _id } = data.user;
            // if login success, store user data in session storage and redirect to dashboard page.
            sessionStorage.setItem(
                'user',
                JSON.stringify({ name, email, _id })
            );
            setError('');
            navigate('/dashboard');
            return;
        }

        // show the error message.
        setError(data.message);
    };
    return (
        <div className="border-3 border-stone-900 p-4 rounded-lg bg-slate-300">
            <div className="text-center pb-5 font-bold text-2xl">Log In</div>
            <hr />
            {isLoading && <Spinner variant="dark" animation="grow" />}
            {error && <Alert variant="danger">{error}</Alert>}
            <Form>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        ref={emailRef}
                        type="email"
                        placeholder="Enter email"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        ref={passwordRef}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Group>
                <button
                    onClick={handleOnSubmit}
                    className="mt-2 p-1.5 border-2 border-stone-900 rounded-md hover:text-white hover:bg-black"
                >
                    Log In
                </button>
                <div className="text-end">
                    New Here?{' '}
                    <Link
                        className="no-underline hover:font-bold"
                        to="/register"
                    >
                        Register
                    </Link>
                </div>
            </Form>
        </div>
    );
};

export default Login;
