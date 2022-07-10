import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import { EtForm } from '../components/etForm/EtForm';
import { CustomTable } from '../components/customTable/CustomTable';

const Dashboard = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const user = JSON.parse(sessionStorage.getItem('user'));
        if (!user?._id) {
            navigate('/');
        }
    }, [navigate]);

    return (
        <MainLayout>
            <span className="text-2xl">Dashboard</span>
            <hr />
            <EtForm />
            <CustomTable />
        </MainLayout>
    );
};

export default Dashboard;
