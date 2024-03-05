import React from 'react';
import Header from "../components/Header";
import {Outlet} from 'react-router-dom';


const Dashboard = () => {

    return (
        <div>
            <Header />
            <Outlet></Outlet>
        </div>
    );
}

export default Dashboard;
