import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import { EtForm } from '../components/etForm/EtForm';
import { CustomTable } from '../components/customTable/CustomTable';
import {
    deleteExpense,
    getExpenses,
    postExpenses,
} from '../helper/AxiosHelper';
import { Alert, Spinner } from 'react-bootstrap';
import FilterForm from '../components/filterForm/FilterForm';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);

const Dashboard = () => {
    const navigate = useNavigate();
    const [reply, setReply] = useState({
        state: '',
        message: '',
    });

    const [isLoading, setIsLoading] = useState(false);
    const [expenses, setExpenses] = useState([]);

    const [displayExpenses, setDisplayExpenses] = useState([]);
    const [fetch, setFetch] = useState(true);

    useEffect(() => {
        const user = JSON.parse(sessionStorage.getItem('user'));
        if (!user?._id) {
            navigate('/');
        }
        fetch && fetchExpenses();
        setFetch(false);

        !displayExpenses.length && setDisplayExpenses(expenses);
    }, [navigate, expenses, displayExpenses]);

    const fetchExpenses = async () => {
        const data = await getExpenses();
        data?.status === 'success' && setExpenses(data.expenses);
    };

    const handleOnFilter = (filterData) => {
        //filter the data and pass to setDisplayExpenses
        const filteredData = displayExpenses?.filter(
            (expense) =>
                dayjs(expense?.date).isSameOrAfter(
                    dayjs(filterData?.fromdate)
                ) &&
                dayjs(expense?.date).isSameOrBefore(dayjs(filterData?.todate))
        );

        filteredData?.length && setDisplayExpenses(filteredData);
    };

    const handleOnPost = async (formData) => {
        setIsLoading(true);
        // call api
        const data = await postExpenses(formData);
        setIsLoading(false);
        setReply(data);
        data.status === 'success' && fetchExpenses();
    };

    const handleOnDelete = async (_id) => {
        if (!window.confirm('Are you sure you want to delete this expense?'))
            return;
        const data = await deleteExpense(_id);
        data.status === 'success' && fetchExpenses();
        setReply(data);
    };
    return (
        <MainLayout>
            <span className="flex justify-center text-3xl uppercase">
                Track your expenses
            </span>
            <hr />
            {isLoading && <Spinner variant="dark" animation="grow" />}
            {reply.message && (
                <Alert
                    variant={reply.status === 'success' ? 'success' : 'danger'}
                >
                    {reply.message}
                </Alert>
            )}
            <EtForm handleOnPost={handleOnPost} />
            <FilterForm handleOnFilter={handleOnFilter} />
            <CustomTable
                handleOnFilter={handleOnFilter}
                displayExpenses={displayExpenses || expenses}
                handleOnDelete={handleOnDelete}
            />
        </MainLayout>
    );
};

export default Dashboard;
