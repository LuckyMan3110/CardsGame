import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { BuilderLayout } from "../../../../layout";
import { CardOne, CardTwo, CardThree, CardFour, ChartOne, ChartTwo, Breadcrumb } from '../../../index.jsx';
import axios from "axios";
import {FaUsers, FaUserTie} from "react-icons/fa";
import {RiAdminFill} from "react-icons/ri";

const BuilderDashboard = () => {
    const { user } = useSelector((state) => state.auth);
    const [dataUser, setDataUser] = useState(null);
    const navigate = useNavigate();

    const onNewCreate = () => {
        navigate('/about');
    }
    useEffect(() => {
        const getDataUser = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:5000/data_pegawai/name/${user.user_name}`
                );
                const data = response.data;
                setDataUser(data);
            } catch (error) {
                console.log(error);
            }
        };

        if (user && user.access_type === "user") {
            getDataUser();
        }
    }, [user]);


    return (
        <BuilderLayout>
            <Breadcrumb pageName='Dashboard' />
            {user && user.access_type === "user" && (
                <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5'>
                    <div className='rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark' onClick={onNewCreate}>
                        <div className='flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4'>
                            <FaUsers className='fill-primary dark:fill-white text-xl' />
                        </div>
                        <div className='mt-4 flex items-end justify-between'>
                            <div>
                                <h4 className='text-title-md font-bold text-black dark:text-white'>
                                    Create New App
                                </h4>
                                <span className='text-sm font-medium'>Data User</span>
                            </div>
                        </div>
                    </div>
                    <div className='rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark'>
                        <div className='flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4'>
                            <RiAdminFill className="fill-primary dark:fill-white text-xl" />
                        </div>
                        <div className='mt-4 flex items-end justify-between'>
                            <div>
                                <h4 className='text-title-md font-bold text-black dark:text-white'>
                                    Start From Templete
                                </h4>
                                <span className='text-sm font-medium'>Data Admin</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {user && user.access_type === "admin" && dataUser && (
                <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5'>
                    <CardOne />
                    <CardTwo />
                    <CardThree />
                    <CardFour />
                </div>
            )}
            {user && user.access_type === "admin" && (
                <div className="mt-4 grid grid-cols-12 gap-6 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
                    <div className="col-span-12 sm:col-span-7">
                        <ChartOne />
                    </div>
                    <div className="col-span-12 sm:col-span-5">
                        <ChartTwo />
                    </div>
                </div>
            )}
        </BuilderLayout>
    );
};

export default BuilderDashboard;
