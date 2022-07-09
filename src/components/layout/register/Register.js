import React, { useState } from 'react';

import { Alert, Form, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { RegisterUser } from '../../../helper/AxiosHelper';

const initialState = {
    name: '',
    email: '',
    password: '',
};

const Register = () => {
    const [formData, setFormData] = useState(initialState);
    const [isLoading, setIsLoading] = useState(false);
    const [reply, setReply] = useState({});

    const handleOnChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        // Call API using Axios
        const { data } = await RegisterUser(formData);
        setReply(data);
        setIsLoading(false);
    };

    return (
        <div className="border-3 border-stone-900 p-6 rounded-lg bg-slate-300">
            <div className="text-center pb-3 font-bold text-2xl">Register</div>
            <hr />
            {isLoading && <Spinner variant="dark" animation="grow" />}
            {reply.message && (
                <Alert
                    variant={reply.status === 'success' ? 'success' : 'danger'}
                >
                    {reply.message}
                </Alert>
            )}
            <Form onSubmit={handleOnSubmit}>
                <Form.Group className="mb-3">
                    {' '}
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        onChange={handleOnChange}
                        required
                        type="text"
                        name="name"
                        placeholder="Enter name"
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    {' '}
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        required
                        onChange={handleOnChange}
                        type="email"
                        name="email"
                        placeholder="Enter email"
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        required
                        onChange={handleOnChange}
                        type="password"
                        name="password"
                        placeholder="Password"
                    />
                </Form.Group>
                <button
                    type="submit"
                    className="mt-2 p-1.5 border-2 border-stone-900 rounded-md hover:text-white hover:bg-black"
                >
                    Register
                </button>
                <div className="text-end">
                    Already In?{' '}
                    <Link className="no-underline hover:font-bold" to="/">
                        Login
                    </Link>
                </div>
            </Form>
        </div>
    );
};

export default Register;
