import logo from "../../../../Assets/images/logo/logo.png"
import { BsFacebook } from "react-icons/bs";
import { AiFillGooglePlusCircle } from "react-icons/ai";
import { FiLinkedin } from "react-icons/fi";
import { BsTwitter } from "react-icons/bs";
import { BsQuora } from "react-icons/bs";
import { BsTicket } from "react-icons/bs";
import { BiLastPage } from "react-icons/bi";
import { BsFillPersonBadgeFill } from "react-icons/bs";
import { MdReviews } from "react-icons/md";
import { SiAudioboom } from "react-icons/si";
import { FaVideo } from "react-icons/fa";
import { SiSocialblade } from "react-icons/si";
import { FaPhoneSquare } from "react-icons/fa";
import { MdOutline1K } from "react-icons/md";

const Tools = () => {
    return (
        <div className='relative py-8 border-stone-800'>
            {/*<div className="absolute inset-0 bg-no-repeat bg-stone-900 dark:bg-[#0B1120] index_beams__yWcJT z-0">*/}
            {/*    <div*/}
            {/*        className="absolute inset-x-0 bottom-0 h-full text-slate-600/10 [mask-image:linear-gradient(to_bottom,transparent,white)]">*/}
            {/*        <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">*/}
            {/*            <defs>*/}
            {/*                <pattern id="pricing-pattern" width="32" height="32" patternUnits="userSpaceOnUse" x="50%" y="100%"*/}
            {/*                         patternTransform="translate(0 -1)">*/}
            {/*                    <path d="M0 32V.5H32" fill="none" stroke="currentColor"></path>*/}
            {/*                </pattern>*/}
            {/*            </defs>*/}
            {/*            <rect width="100%" height="100%" fill="url(#pricing-pattern)"></rect>*/}
            {/*        </svg>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className="relative max-w-5xl mx-auto font-black font-bold z-1">
                <h1 className='text-center text-5xl my-4  lg:pt-10 text-yellow-500 max-sm:my-2 max-sm:text-xl'>Great Connecting</h1>
                <p className="text-center max-sm:mx-8">You can connect specific platform</p>
                <div className='flex max-sm:flex-col'>
                    <div className='w-1/4 my-50 p-8 max-sm:w-1/2 max-sm:mx-auto max-sm:my-0 '>
                        <div className='bg-stone-500 bg-opacity-50 rounded-3xl animate-[wiggle_1s_ease-in-out_infinite] shadow-2xl shadow-yellow-500/50'>
                            <img className="rounded-2xl" src={logo} alt='logo' />
                        </div>
                    </div>
                    <div className='flex w-8/12 mx-16 max-sm:mx-2 max-sm:block max-sm:mx-auto'>
                        <div className="flex w-1/2 max-sm:w-full max-sm:justify-center">
                            <div className='w-1/3 px-2 max-sm:w-1/3 max-sm:px-0'>
                                <div className='w-5/6 h-20 bg-opacity-50 hover:bg-opacity-90 bg-stone-500 rounded-2xl my-32 text-5xl shadow-2xl shadow-stone-500/50 hover:scale-110'>
                                    <div className='text-center p-4'><BsFacebook className="text-5xl max-sm:text-4xl "></BsFacebook></div>
                                </div>
                                <div className='w-5/6 h-20 bg-opacity-50 hover:bg-opacity-90 bg-stone-500 rounded-2xl my-32 shadow-2xl shadow-sky-500/50 hover:scale-110'>
                                    <div className='text-center p-4'><AiFillGooglePlusCircle className="text-5xl max-sm:text-4xl"></AiFillGooglePlusCircle></div>
                                </div>
                            </div>
                            <div className='w-1/3 px-2 max-sm:w-1/3 max-sm:px-0'>
                                <div className='w-5/6 h-20 bg-opacity-50 hover:bg-opacity-90 bg-stone-500 rounded-2xl my-12 shadow-2xl shadow-yellow-500/50 hover:scale-110'>
                                    <div className='text-center p-4'><FiLinkedin className="text-5xl max-sm:text-4xl"></FiLinkedin></div>
                                </div>
                                <div className='w-5/6 h-20 bg-opacity-50 hover:bg-opacity-90 bg-stone-500 rounded-2xl my-32 shadow-2xl shadow-pink-500/50 hover:scale-110'>
                                    <div className='text-center p-4'><BsTwitter className="text-5xl max-sm:text-4xl"></BsTwitter></div>
                                </div>
                                <div className='w-5/6 h-20 bg-opacity-50 hover:bg-opacity-90 bg-stone-500 rounded-2xl my-32 shadow-2xl shadow-emerald-500/50 hover:scale-110'>
                                    <div className='text-center p-4'><BsQuora className="text-5xl max-sm:text-4xl"></BsQuora></div>
                                </div>
                            </div>
                            <div className='w-1/3 px-2 max-sm:w-1/3 max-sm:px-0'>
                                <div className='w-5/6 h-20 bg-opacity-50 hover:bg-opacity-90 bg-stone-500 rounded-2xl my-32 shadow-2xl shadow-violet-500/50 hover:scale-110'>
                                    <div className='text-center p-4'><BsTicket className="text-5xl max-sm:text-4xl"></BsTicket></div>
                                </div>
                                <div className='w-5/6 h-20 bg-opacity-50 hover:bg-opacity-90 bg-stone-500 rounded-2xl my-32 shadow-2xl shadow-pink-500/50 hover:scale-110'>
                                    <div className='text-center p-4'><BiLastPage className="text-5xl max-sm:text-4xl"></BiLastPage></div>
                                </div>
                                <div className='w-5/6 h-20 bg-opacity-50 hover:bg-opacity-90 bg-stone-500 rounded-2xl my-32 shadow-2xl shadow-blue-500/50 hover:scale-110'>
                                    <div className='text-center p-4'><BsFillPersonBadgeFill className="text-5xl max-sm:text-4xl"></BsFillPersonBadgeFill></div>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-1/2 max-sm:w-full max-sm:mx-auto max-sm:-mt-60">
                            <div className='w-1/3 px-2 max-sm:w-1/3 max-sm:px-0'>
                                <div className='w-5/6 h-20 bg-opacity-50 hover:bg-opacity-90 bg-stone-500 rounded-2xl my-12 shadow-2xl shadow-sky-500/50 hover:scale-110'>
                                    <div className='text-center p-4'><MdReviews className="text-5xl max-sm:text-4xl"></MdReviews></div>
                                </div>
                                <div className='w-5/6 h-20 bg-opacity-50 hover:bg-opacity-90 bg-stone-500 rounded-2xl my-32 shadow-2xl shadow-stone-500/50 hover:scale-110'>
                                    <div className='text-center p-4'><SiAudioboom className="text-5xl max-sm:text-4xl"></SiAudioboom></div>
                                </div>
                                <div className='w-5/6 h-20 bg-opacity-50 hover:bg-opacity-90 bg-stone-500 rounded-2xl my-32 shadow-2xl shadow-green-500/50 hover:scale-110'>
                                    <div className='text-center p-4'><FaVideo className="text-5xl max-sm:text-4xl"></FaVideo></div>
                                </div>
                            </div>
                            <div className='w-1/3 px-2 max-sm:w-1/3 max-sm:px-0'>
                                <div className='w-5/6 h-20 bg-opacity-50 hover:bg-opacity-90 bg-stone-500 rounded-2xl my-32 shadow-2xl shadow-yellow-500/50 hover:scale-110'>
                                    <div className='text-center p-4'><SiSocialblade className="text-5xl max-sm:text-4xl"></SiSocialblade></div>
                                </div>
                                <div className='w-5/6 h-20 bg-opacity-50 hover:bg-opacity-90 bg-stone-500 rounded-2xl my-32 shadow-2xl shadow-blue-500/50 hover:scale-110'>
                                    <div className='text-center p-4'><FaPhoneSquare className="text-5xl max-sm:text-4xl"></FaPhoneSquare></div>
                                </div>
                            </div>
                            <div className='w-1/3 px-2 max-sm:w-1/3 max-sm:px-0'>
                                <div className='w-5/6 h-20 bg-opacity-50 hover:bg-opacity-90 bg-stone-500 rounded-2xl my-56 shadow-2xl shadow-pink-500/50 hover:scale-110'>
                                    <div className='text-center p-4'><MdOutline1K className="text-5xl max-sm:text-4xl"></MdOutline1K></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Tools;