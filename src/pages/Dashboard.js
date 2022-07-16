import React, { useEffect, useState } from 'react';
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

const Dashboard = () => {
    const navigate = useNavigate();
    const [reply, setReply] = useState({
        state: '',
        message: '',
    });

    const [isLoading, setIsLoading] = useState(false);
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        const user = JSON.parse(sessionStorage.getItem('user'));
        if (!user?._id) {
            navigate('/');
        }
        fetchExpenses();
    }, [navigate]);

    const fetchExpenses = async () => {
        const data = await getExpenses();
        data?.status === 'success' && setExpenses(data.expenses);
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
            <span className="text-2xl">Dashboard</span>
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
            <CustomTable expenses={expenses} handleOnDelete={handleOnDelete} />
        </MainLayout>
    );
};

export default Dashboard;
