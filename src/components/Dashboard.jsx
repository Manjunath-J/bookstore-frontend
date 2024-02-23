import React, { useState } from 'react';
import Header from "../components/Header";
import {Outlet } from 'react-router-dom';


const Dashboard = () => {

  const [user, setUser] = useState(false);

    return (
        <div>
            <Header />
            <Outlet></Outlet>
        </div>
    );
}

export default Dashboard;
