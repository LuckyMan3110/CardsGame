import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { FaUsers } from 'react-icons/fa';

const CardOne = () => {
    const { user, isError } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const OpenGameRoom = async (e) => {
        e.preventDefault();
        user.access_type == "user" ? navigate(`/joingame?gameType=${"Emptiness Redesigned"}`) : navigate(`/opengame?gameType=${"Emptiness Redesigned"}`);
    }
    useEffect(() => {
        if (isError) {
            navigate('/signin');
        }
    }, [isError, user, navigate]);
    return (
        <div className='rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark' onClick={OpenGameRoom}>
          <div className='flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4'>
            <FaUsers className='fill-primary dark:fill-white text-xl' />
          </div>
          <div className='mt-4 flex items-end justify-between'>
            <div>
              <h4 className='text-title-md font-bold text-black dark:text-white'>
              </h4>
              <span className='text-sm font-medium'>Emptiness Redesigned</span>
            </div>
          </div>
        </div>
    );
};

export default CardOne;
