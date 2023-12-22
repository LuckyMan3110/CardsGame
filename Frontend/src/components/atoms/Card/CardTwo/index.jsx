import React, { useEffect }from 'react';
import { RiAdminFill } from 'react-icons/ri'
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const CardTwo = () => {
    const { user, isError } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const OpenGameRoom = async (e) => {
        e.preventDefault();
        user.access_type == "user" ? navigate(`/joingame?gameType=${"Feeling Nostalgic"}`) : navigate(`/opengame?gameType=${"Feeling Nostalgic"}`);
    }
    useEffect(() => {
        if (isError) {
            navigate('/signin');
        }
    }, [isError, user, navigate]);
  return (
    <div className='rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark' onClick={OpenGameRoom}>
      <div className='flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4'>
        <RiAdminFill className="fill-primary dark:fill-white text-xl" />
      </div>
      <div className='mt-4 flex items-end justify-between'>
        <div>
          {/*<h4 className='text-title-md font-bold text-black dark:text-white'>*/}
          {/*  1*/}
          {/*</h4>*/}
          <span className='text-sm font-medium'>Feeling Nostalgic</span>
        </div>
      </div>
    </div>
  )
}

export default CardTwo;
