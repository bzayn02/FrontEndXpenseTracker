import React, { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';

const FilterForm = ({ handleOnFilter }) => {
    const initialState = {
        fromdate: '',
        todate: '',
    };

    const [filterData, setFilterData] = useState(initialState);

    const [showFilterForm, setShowFilterForm] = useState(false);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        handleOnFilter(filterData);
    };

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFilterData({
            ...filterData,
            [name]: value,
        });
    };

    return (
        <div className="bg-blue-300 p-3 rounded-md mt-3">
            <button
                onClick={() => setShowFilterForm(!showFilterForm)}
                className={
                    !showFilterForm
                        ? 'flex items-center justify-center p-1.5 border-2 border-stone-900 rounded-md hover:text-white hover:bg-black'
                        : 'flex items-center justify-center p-1.5 text-white bg-red-500  border-red-400 border-2 rounded-md'
                }
            >
                {!showFilterForm ? (
                    <span>Search By Date?</span>
                ) : (
                    <span>Close</span>
                )}
            </button>
            {showFilterForm && (
                <Form onSubmit={handleOnSubmit}>
                    <Row className="g-3">
                        <Col md="5">
                            From:
                            <Form.Control
                                onChange={handleOnChange}
                                name="fromdate"
                                required
                                type="date"
                                aria-label="Date"
                            />
                        </Col>
                        <Col md="5">
                            To:
                            <Form.Control
                                onChange={handleOnChange}
                                name="todate"
                                required
                                type="date"
                                aria-label="Date"
                            />
                        </Col>
                        <Col>
                            <button
                                type="submit"
                                className="p-1.5 border-2 border-stone-900 rounded-md hover:text-white hover:bg-black"
                            >
                                Search
                            </button>
                        </Col>
                    </Row>
                </Form>
            )}
        </div>
    );
};

export default FilterForm;
