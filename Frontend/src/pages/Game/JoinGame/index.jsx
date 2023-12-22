import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {useLocation} from "react-router-dom";
import Swal from 'sweetalert2';
import {DefaultLayout} from "../../../layout/index.jsx";
import { MdDownloadDone } from "react-icons/md";
import {getMe, getDataOpenGame} from "../../../config/action/index.js";

const JoinGame = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { search } = useLocation();
    const params = new URLSearchParams(search);
    const gameType = params.get("gameType");
    const { isSuccess, dataAllGame } = useSelector((state) => state.game);
    const { isError, user } = useSelector((state) => state.auth);
    const newGame = dataAllGame.filter(item =>
        (item.followlist.length === 0 || item.followlist.some(entry => entry.email !== user.email)) && item.state === 1
    );
    const goingGame = dataAllGame.filter(item =>
        item.followlist.some(entry => entry.email === user.email) && item.state == 1
    );
    const finishMyGame = dataAllGame.filter(item =>
        item.followlist.some(entry => entry.email === user.email) && item.state == 0
    );
    const finishOtherGame = dataAllGame.filter(item =>
        item.followlist.some(entry => entry.email !== user.email) && item.state == 0
    );

    useEffect(() => {
        dispatch(getMe);
    }, [dispatch]);

    useEffect(() => {
        dispatch(getDataOpenGame(gameType));
    }, [dispatch]);

    useEffect(() => {
        if (isError) {
            navigate('/signin');
        }
    }, [isError, user, navigate]);

    const handleNavigate = (gameId) => {
        navigate(`/openroom?gameId=${gameId}`);
    };

    return (
        <DefaultLayout>
            <div className='rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1 mt-6'>
                <div className="justify-between items-center mt-4 flex-col md:flex-col md:justify-between">
                    <div className="relative flex-2 mb-4 mt-4 md:mb-0">
                        <p className="text-2xl text-black text-left py-2 pl-8 mb-4 dark:text-white">New Game</p>
                    </div>
                    <div className='grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-7.5'>
                        {newGame.map((game, index) => {
                            return(
                                <div className="h-40 mx-6 shadow-2 bg-gray p-8 rounded-2xl">
                                    <p className="text-black p-1">Startdate: {game.startdate}</p>
                                    <p className="text-black p-1">Enddate: {game.enddate}</p>
                                    <div className="w-12 h-12 p-3 bg-meta-9 shadow-2 rounded-full ml-auto border-2" onClick={() => handleNavigate(game._id)}>
                                        <MdDownloadDone className="text-2xl text-black"/>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div>
                    <div className="relative flex-2 mb-4 mt-4 md:mb-0">
                        <p className="text-2xl text-black py-2 pl-8 mb-4 dark:text-white">Pending Game</p>
                    </div>
                    <div className='grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-7.5'>
                        {goingGame.map((game, index) => {
                            return(
                                <div className="h-40 mx-6 shadow-2 bg-gray p-8 rounded-2xl">
                                    <p className="text-black p-1">Startdate: {game.startdate}</p>
                                    <p className="text-black p-1">Enddate: {game.enddate}</p>
                                    <div className="w-12 h-12 p-3 bg-meta-9 shadow-2 rounded-full ml-auto border-2" onClick={() => handleNavigate(game._id)}>
                                        <MdDownloadDone className="text-2xl text-black"/>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div>
                    <div className="relative flex-2 mb-4 mt-4 md:mb-0">
                        <p className="text-2xl text-black py-2 pl-8 mb-4 dark:text-white">Finished My Game</p>
                    </div>
                    <div className='grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-7.5'>
                        {finishMyGame.map((game, index) => {
                            return(
                                <div className="h-40 mx-6 shadow-2 bg-gray p-8 rounded-2xl">
                                    <p className="text-black p-1">Startdate: {game.startdate}</p>
                                    <p className="text-black p-1">Enddate: {game.enddate}</p>
                                    <div className="w-12 h-12 p-3 bg-meta-9 shadow-2 rounded-full ml-auto border-2" onClick={() => handleNavigate(game._id)}>
                                        <MdDownloadDone className="text-2xl text-black"/>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div>
                    <div className="relative flex-2 mb-4 mt-4 md:mb-0">
                        <p className="text-2xl text-white py-2 pl-8 mb-4">Finished All Game</p>
                    </div>
                    <div className='grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-7.5'>
                        {finishOtherGame.map((game, index) => {
                            return(
                                <div className="h-40 mx-6 shadow-2 bg-gray p-8 rounded-2xl">
                                    <p className="text-black p-1">Startdate: {game.startdate}</p>
                                    <p className="text-black p-1">Enddate: {game.enddate}</p>
                                    <div className="w-12 h-12 p-3 bg-meta-9 shadow-2 rounded-full ml-auto border-2" onClick={() => handleNavigate(game._id)}>
                                        <MdDownloadDone className="text-2xl text-black"/>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </DefaultLayout>
    )
}

export default JoinGame;