import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';

export const EtForm = () => {
    return (
        <div className="bg-blue-300 p-3 rounded-md">
            <Row className="g-3">
                <Col md="4">
                    <Form.Control
                        type="text"
                        placeholder="Expense Name"
                        aria-label="Expense name"
                    />
                </Col>
                <Col md="2">
                    <Form.Control
                        type="number"
                        placeholder="Amt"
                        aria-label="Amount"
                    />
                </Col>
                <Col md="4">
                    <Form.Control type="date" aria-label="Date" />
                </Col>
                <Col>
                    <button
                        // onClick={handleOnSubmit}
                        className=" p-1.5 border-2 border-stone-900 rounded-md hover:text-white hover:bg-black"
                    >
                        Add
                    </button>
                </Col>
            </Row>
        </div>
    );
};
