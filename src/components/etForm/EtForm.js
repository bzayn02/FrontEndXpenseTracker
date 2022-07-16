import React, { useState } from 'react';

import { Col, Form, Row } from 'react-bootstrap';

const initialState = {
    name: '',
    amount: '',
    date: '',
};
export const EtForm = ({ handleOnPost }) => {
    const [formData, setFormData] = useState(initialState);

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        handleOnPost(formData);
    };
    return (
        <div className="bg-blue-300 p-3 rounded-md">
            <Form onSubmit={handleOnSubmit}>
                <Row className="g-3">
                    <Col md="4">
                        <Form.Control
                            onChange={handleOnChange}
                            name="name"
                            required
                            type="text"
                            placeholder="Expense Name"
                            aria-label="Expense name"
                        />
                    </Col>
                    <Col md="2">
                        <Form.Control
                            onChange={handleOnChange}
                            name="amount"
                            type="number"
                            required
                            placeholder="Amt"
                            aria-label="Amount"
                        />
                    </Col>
                    <Col md="4">
                        <Form.Control
                            onChange={handleOnChange}
                            name="date"
                            required
                            type="date"
                            aria-label="Date"
                        />
                    </Col>
                    <Col>
                        <button
                            type="submit"
                            className=" p-1.5 border-2 border-stone-900 rounded-md hover:text-white hover:bg-black"
                        >
                            Add
                        </button>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};
