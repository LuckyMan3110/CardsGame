import React from 'react';
import LogoTaggy from '../../../Assets/images/logo/logo-taggy.png';
import LoginImg from '../../../Assets/images/LoginImg/login.svg';
import { SignUpInput, Navbar } from '../../../components';
import { AiFillGoogleCircle } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi"

function SignUp() {
    return (
        <div className="pt-10 min-h-screen rounded-sm border border-stroke shadow-default dark:border-strokedark dark:bg-boxdark">
            <Navbar/>
            <div className="flex flex-wrap items-center min-h-screen">
                <div className="hidden w-full xl:block xl:w-1/2">
                    <div className="py-18.5 px-26 text-center ">
                        <p className="text-2xl my-4 dark:text-white">
                            <strong>Cards Against Humanity</strong>
                            is a fill-in-the-blank party game that turns your awkward personality and lackluster social skills into hours of fun! Wow.
                        </p>
                        <p className="text-2xl dark:text-white">
                            The game is simple. Each round, one player asks a question from a black card, and everyone else answers with their funniest white card.
                        </p>
                    </div>
                </div>

                <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
                    <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
                        <SignUpInput></SignUpInput>
                        {/* <p className="max-sm:m-2 max-sm:text-sm">By creating an account you agree to <a href="/help" className="text-meta-7">our Terms and Conditions</a>,<br/> <a href="/help" className="text-meta-7">Privacy Policy</a> and to receive Nicepage emails.</p> */}
                        {/* <div className="w-full pt-4">
                            <button className="w-80 my-2 bg-meta-7 py-3 px-10 rounded-xl flex text-xl text-meta-9 max-sm:mx-auto"><AiFillGoogleCircle className="text-3xl text-meta-9 mx-2"></AiFillGoogleCircle>Sign In With Google</button>
                            <button className="w-80 my-2 bg-meta-4 py-3 px-10 rounded-xl flex text-xl text-meta-9 max-sm:mx-auto"><FiPhoneCall className="text-3xl text-meta-9 mx-2"></FiPhoneCall>Sign In With Phone</button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;