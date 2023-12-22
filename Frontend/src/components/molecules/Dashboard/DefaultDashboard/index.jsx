import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { DefaultLayout } from "../../../../layout";
import { CardOne, CardTwo, CardThree, CardFour, CardFive, CardSix, ChartOne, ChartTwo, Breadcrumb } from '../../../index.jsx';
import axios from "axios";

const DefaultDashboard = () => {
    const { user } = useSelector((state) => state.auth);
    const [userdata, setUserData] = useState(null);

    useEffect(() => {
        const getUserData = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:5000/users/name/${user.name}`
                );
                const data = response.data;
                setUserData(data);
            } catch (error) {
                console.log(error);
            }
        };

        if (user && user.access_type === "user") {
            getUserData();
        }
    }, [user]);

    return (
        <DefaultLayout>
            <Breadcrumb pageName='Dashboard' />

            <div className="mt-6">
                <h2 className="px-4 py-2 text-meta-3 font-medium text-center md:text-left">
                    Welcome to QA Game You Login as an Officer.
                </h2>
            </div>
            <div className='grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-7.5'>
                {/* <CardOne /> */}
                <CardTwo />
                <CardFive />
                {/* <CardThree /> */}
            </div>
            {/* <div className="mt-6">
                <h2 className="px-4 py-2 text-meta-3 font-medium text-center md:text-left">
                    Welcome to QA Game You Login as an Officer.
                </h2>
            </div>
            <div className='grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-7.5'>
                <CardFour />
                <CardFive />
            </div> */}

        </DefaultLayout>
    );
};

export default DefaultDashboard;
