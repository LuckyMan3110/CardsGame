import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { FaRegEdit, FaPlus } from 'react-icons/fa'
import { BsTrash3 } from 'react-icons/bs'
import { BiSearch } from 'react-icons/bi'
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md';
import {DefaultLayout} from "../../../layout/index.jsx";
import {Breadcrumb, ButtonOne} from "../../../components/index.jsx";
import {getMe, getDataOpenGame} from "../../../config/action/index.js";
import {useLocation} from "react-router-dom";

const ITEMS_PER_PAGE = 4;

const OpenGame = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchKeyword, setSearchKeyword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isSuccess, dataAllGame } = useSelector((state) => state.game);
    const { search } = useLocation();
    const params = new URLSearchParams(search);
    const gametype = params.get("gameType");
    const { isError, user } = useSelector((state) => state.auth);

    const totalPages = Math.ceil(dataAllGame.length / ITEMS_PER_PAGE);

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    const filteredGameData = dataAllGame.filter((gamedata) => {
        const { startdate } = gamedata;
        const keyword = searchKeyword.toLowerCase();
        return (
            startdate.toLowerCase().includes(keyword)
        );
    });

    const goToPrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prev) => prev - 1);
        }
    };

    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prev) => prev + 1);
        }
    };

    const handleSearch = (event) => {
        setSearchKeyword(event.target.value);
    };

    const onDeleteJabatan = (id) => {
        Swal.fire({
            title: 'Confirmation',
            text: 'Are you sure you want to Delete?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
            reverseButtons: true,
        }).then((result) => {
            if (result.isConfirmed) {
                // dispatch(deleteDataJabatan(id)).then(() => {
                //     Swal.fire({
                //         title: 'Successful',
                //         text: 'Successful Game data is deleted.',
                //         icon: 'success',
                //         timer: 1000,
                //         timerProgressBar: true,
                //         showConfirmButton: false,
                //     });
                //     dispatch(getDataOpenGame());
                // });
            }
        });
    };

    useEffect(() => {
        dispatch(getMe);
    }, [dispatch]);

    useEffect(() => {
        dispatch(getDataOpenGame(gametype));
    }, [dispatch, startIndex, endIndex]);

    useEffect(() => {
        if (isError) {
            navigate('/signin');
        }
    }, [isError, user, navigate]);

    const paginationItems = () => {
        const items = [];
        const maxVisiblePages = 5;

        const startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
        const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

        for (let page = startPage; page <= endPage; page++) {
            items.push(
                <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`py-2 px-4 border border-gray-2 text-black font-semibold dark:text-white dark:border-strokedark ${currentPage === page ? 'bg-primary text-white hover:bg-primary dark:bg-primary dark:hover:bg-primary' : 'hover:bg-gray-2 dark:hover:bg-stroke'
                    } rounded-lg`}
                >
                    {page}
                </button>
            );
        }

        if (startPage > 2) {
            items.unshift(
                <p
                    key="start-ellipsis"
                    className="py-2 px-4 border border-gray-2 dark:bg-transparent text-black font-medium bg-gray dark:border-strokedark dark:text-white"
                >
                    ...
                </p>
            );
        }

        if (endPage < totalPages - 1) {
            items.push(
                <p
                    key="end-ellipsis"
                    className="py-2 px-4 border border-gray-2 dark:bg-transparent text-black font-medium bg-gray dark:border-strokedark dark:text-white"
                >
                    ...
                </p>
            );
        }

        return items;
    };

    return (
        <DefaultLayout>
            <Breadcrumb pageName='Game Data' />
            <Link to="/creategame" >
                <ButtonOne  >
                    <span>Create Game</span>
                    <span>
                        <FaPlus />
                    </span>
                </ButtonOne>
            </Link>
            <div className='rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1 mt-6'>
                <div className="flex justify-between items-center mt-4 flex-col md:flex-row md:justify-between">
                    <div className="relative flex-2 mb-4 md:mb-0">
                        <input
                            type='text'
                            placeholder='Search Game...'
                            value={searchKeyword}
                            onChange={handleSearch}
                            className='rounded-lg border-[1.5px] border-stroke bg-transparent py-2 pl-10 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary left-0'
                        />
                        <span className='absolute left-2 py-3 text-xl'>
                            <BiSearch />
                        </span>
                    </div>
                </div>

                <div className='max-w-full overflow-x-auto py-4'>
                    <table className='w-full table-auto'>
                        <thead>
                        <tr className='bg-gray-2 text-left dark:bg-meta-4'>
                            <th className='py-4 px-4 font-medium text-black dark:text-white'>
                                No
                            </th>
                            <th className='py-4 px-4 font-medium text-black dark:text-white'>
                                Game Type
                            </th>
                            <th className='py-4 px-4 font-medium text-black dark:text-white'>
                                Start Date
                            </th>
                            <th className='py-4 px-4 font-medium text-black dark:text-white'>
                                End Date
                            </th>
                            <th className='py-4 px-4 font-medium text-black dark:text-white'>
                                State
                            </th>
                            <th className='py-4 px-4 font-medium text-black dark:text-white'>
                                Attend Number
                            </th>
                            <th className='py-4 px-4 font-medium text-black dark:text-white'>
                                Setting
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {filteredGameData.slice(startIndex, endIndex).map((data, index) => {
                            return (
                                <tr key={data.id}>
                                    <td className='border-b border-[#eee] py-5 px-4 dark:border-strokedark'>
                                        <p className='text-black dark:text-white'>{startIndex + index + 1}</p>
                                    </td>
                                    <td className='border-b border-[#eee] py-5 px-4 dark:border-strokedark'>
                                        <p className='text-black dark:text-white'>{data.gametype}</p>
                                    </td>
                                    <td className='border-b border-[#eee] py-5 px-4 dark:border-strokedark'>
                                        <p className='text-black dark:text-white'>{data.startdate}</p>
                                    </td>
                                    <td className='border-b border-[#eee] py-5 px-4 dark:border-strokedark'>
                                        <p className='text-black dark:text-white'>{data.enddate}</p>
                                    </td>
                                    <td className='border-b border-[#eee] py-5 px-4 dark:border-strokedark'>
                                        <p className='text-black dark:text-white'>{data.state}</p>
                                    </td>
                                    <td className='border-b border-[#eee] py-5 px-4 dark:border-strokedark'>
                                        <p className='text-black dark:text-white'>{data.attendnumber}</p>
                                    </td>
                                    <td className='border-b border-[#eee] py-5 px-4 dark:border-strokedark'>
                                        <div className='flex items-center space-x-3.5'>
                                            <Link
                                                className='hover:text-black'
                                                to={`/data-jabatan/form-data-jabatan/edit/${data.id}`}
                                            >
                                                <FaRegEdit className="text-primary text-xl hover:text-black dark:hover:text-white" />
                                            </Link>
                                            <button
                                                onClick={() => onDeleteJabatan(data.id)}
                                                className='hover:text-black'>
                                                <BsTrash3 className="text-danger text-xl hover:text-black dark:hover:text-white" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </div>

                <div className="flex justify-between items-center mt-4 flex-col md:flex-row md:justify-between">
                    <div className="flex items-center space-x-2">
                        <span className="text-gray-5 dark:text-gray-4 text-sm py-4">
                            Showing {startIndex + 1}-{Math.min(endIndex, filteredGameData.length)} of {filteredGameData.length} Game Data
                        </span>
                    </div>
                    <div className="flex space-x-2 py-4">
                        <button
                            disabled={currentPage === 1}
                            onClick={goToPrevPage}
                            className="py-2 px-6 rounded-lg border border-primary text-primary font-semibold hover:bg-primary hover:text-white dark:text-white dark:border-primary dark:hover:bg-primary dark:hover:text-white disabled:opacity-50"
                        >
                            < MdKeyboardDoubleArrowLeft />
                        </button>
                        {paginationItems()}
                        <button
                            disabled={currentPage === totalPages}
                            onClick={goToNextPage}
                            className="py-2 px-6 rounded-lg border border-primary text-primary font-semibold hover:bg-primary hover:text-white dark:text-white dark:border-primary dark:hover:bg-primary dark:hover:text-white disabled:opacity-50"
                        >
                            < MdKeyboardDoubleArrowRight />
                        </button>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    )
}

export default OpenGame;