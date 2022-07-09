import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';

const Dashboard = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const user = JSON.parse(sessionStorage.getItem('user'));
        if (!user?._id) {
            navigate('/');
        }
    }, [navigate]);

    return <MainLayout>Dashboard page</MainLayout>;
};

export default Dashboard;
