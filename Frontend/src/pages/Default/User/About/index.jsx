import React from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import "./About.css";
import BilLinkImg from '../../../../assets/images/home/bio-link.jpg';
import ShortLinkImg from '../../../../assets/images/home/short-link.png';
import QrcodeImg from '../../../../assets/images/home/qr-code.jpg';
import Analysis from '../../../../assets/images/home/analytics.jpg';
import '../../../../shared/Shared.css'
import { BottomLine } from "../../../../components/atoms";

const About = () => {
    // const location = useLocation();
    // const isHomePage = location.pathname === "/";

    return (
        <>
            <div className="dark:bg-boxdark">
                <div className="parent pt-16 my-16">
                    <div>
                        <motion.div
                            className="mb-10"
                            initial={{ y: -200, opacity: 0 }}
                            animate={{
                                y: 0,
                                opacity: 1,
                                transition: { duration: 1, type: "spring" },
                            }}
                        >
                            <h3 className="text-neutral text-center dark:text-white">Brilliant App</h3>
                            <h1 className="text-4xl font-semibold drop-shadow-md text-center text-accent dark:text-white">
                                Bio link  <span className="text-primary">pages</span>
                            </h1>
                            <BottomLine />
                        </motion.div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                            <motion.div
                                initial={{ x: -200, opacity: 0 }}
                                animate={{
                                    x: 0,
                                    opacity: 1,
                                    transition: { duration: 1, delay: 1.25 },
                                }}
                            >
                                <img
                                    src={BilLinkImg}
                                    alt="About BioLink"
                                    className="rounded-2xl w-100 h-80 shadow-2xl transform translate-y-[-12%] hover:shadow-md"
                                    title="About BioLink"
                                />

                            </motion.div>
                            <motion.div
                                initial={{ x: 200, opacity: 0 }}
                                animate={{
                                    x: 0,
                                    opacity: 1,
                                    transition: { duration: 1, delay: 1.25 },
                                }}
                            >
                                <p className="font-medium text-center translate-y-[-60%] sm:translate-y-[-0%] sm:mb-2 md:text-left dark:text-white">
                                    Create your own unique & highly customizable bio link page with ease.i, dan pembayaran upah karyawan.
                                </p>
                                <br />
                                <ul className="list-style-none mt-4">
                                    <li className="d-flex align-items-center mb-2 flex">
                                        <svg className="svg-inline--fa fa-circle-check fa-fw fa-sm text-success mr-3 mt-1" width='1rem' height='1rem'
                                             aria-hidden="true" focusable="false" data-prefix="fas"
                                             data-icon="circle-check" role="img" xmlns="http://www.w3.org/2000/svg"
                                             viewBox="0 0 512 512" data-fa-i2svg="">
                                            <path fill="currentColor"
                                                  d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
                                        </svg>
                                        <div>Custom colors &amp; branding</div>
                                    </li>
                                    <li className="d-flex align-items-center mb-2 flex">
                                        <svg className="svg-inline--fa fa-circle-check fa-fw fa-sm text-success mr-3 mt-1" width='1rem' height='1rem'
                                             aria-hidden="true" focusable="false" data-prefix="fas"
                                             data-icon="circle-check" role="img" xmlns="http://www.w3.org/2000/svg"
                                             viewBox="0 0 512 512" data-fa-i2svg="">
                                            <path fill="currentColor"
                                                  d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
                                        </svg>
                                        <div>Tons of ready-to-use components</div>
                                    </li>
                                    <li className="d-flex align-items-center mb-2 flex">
                                        <svg className="svg-inline--fa fa-circle-check fa-fw fa-sm text-success mr-3 mt-1" width='1rem' height='1rem'
                                             aria-hidden="true" focusable="false" data-prefix="fas"
                                             data-icon="circle-check" role="img" xmlns="http://www.w3.org/2000/svg"
                                             viewBox="0 0 512 512" data-fa-i2svg="">
                                            <path fill="currentColor"
                                                  d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
                                        </svg>
                                        <div>SEO settings</div>
                                    </li>
                                    <li className="d-flex align-items-center mb-2 flex">
                                        <svg className="svg-inline--fa fa-circle-check fa-fw fa-sm text-success mr-3 mt-1" width='1rem' height='1rem'
                                             aria-hidden="true" focusable="false" data-prefix="fas"
                                             data-icon="circle-check" role="img" xmlns="http://www.w3.org/2000/svg"
                                             viewBox="0 0 512 512" data-fa-i2svg="">
                                            <path fill="currentColor"
                                                  d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
                                        </svg>
                                        <div>Password protection, sensitive content warning</div>
                                    </li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </div>

                <div className="parent pt-16 my-16">
                    <div>
                        <motion.div
                            className="mb-10"
                            initial={{ y: -200, opacity: 0 }}
                            animate={{
                                y: 0,
                                opacity: 1,
                                transition: { duration: 1, type: "spring" },
                            }}
                        >
                            <h1 className="text-4xl font-semibold drop-shadow-md text-center text-accent dark:text-white">
                                Short link  <span className="text-primary">pages</span>
                            </h1>
                            <BottomLine />
                        </motion.div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                            <motion.div
                                initial={{ x: -200, opacity: 0 }}
                                animate={{
                                    x: 0,
                                    opacity: 1,
                                    transition: { duration: 1, delay: 1.25 },
                                }}
                            >
                                <img
                                    src={ShortLinkImg}
                                    alt="About BioLink"
                                    className="rounded-2xl w-100 h-80 shadow-2xl transform translate-y-[-12%] hover:shadow-md"
                                    title="About BioLink"
                                />

                            </motion.div>
                            <motion.div
                                initial={{ x: 200, opacity: 0 }}
                                animate={{
                                    x: 0,
                                    opacity: 1,
                                    transition: { duration: 1, delay: 1.25 },
                                }}
                            >
                                <p className="font-medium text-center translate-y-[-60%] sm:translate-y-[-0%] sm:mb-2 md:text-left dark:text-white">
                                    Yes! You can use our service as a shortener as well.
                                </p>
                                <br />
                                <ul className="list-style-none mt-4">
                                    <li className="d-flex align-items-center mb-2 flex">
                                        <svg className="svg-inline--fa fa-circle-check fa-fw fa-sm text-success mr-3 mt-1" width='1rem' height='1rem'
                                             aria-hidden="true" focusable="false" data-prefix="fas"
                                             data-icon="circle-check" role="img" xmlns="http://www.w3.org/2000/svg"
                                             viewBox="0 0 512 512" data-fa-i2svg="">
                                            <path fill="currentColor"
                                                  d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
                                        </svg>
                                        <div>Scheduling & expiration limits</div>
                                    </li>
                                    <li className="d-flex align-items-center mb-2 flex">
                                        <svg className="svg-inline--fa fa-circle-check fa-fw fa-sm text-success mr-3 mt-1" width='1rem' height='1rem'
                                             aria-hidden="true" focusable="false" data-prefix="fas"
                                             data-icon="circle-check" role="img" xmlns="http://www.w3.org/2000/svg"
                                             viewBox="0 0 512 512" data-fa-i2svg="">
                                            <path fill="currentColor"
                                                  d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
                                        </svg>
                                        <div>Country, device & language targeting</div>
                                    </li>
                                    <li className="d-flex align-items-center mb-2 flex">
                                        <svg className="svg-inline--fa fa-circle-check fa-fw fa-sm text-success mr-3 mt-1" width='1rem' height='1rem'
                                             aria-hidden="true" focusable="false" data-prefix="fas"
                                             data-icon="circle-check" role="img" xmlns="http://www.w3.org/2000/svg"
                                             viewBox="0 0 512 512" data-fa-i2svg="">
                                            <path fill="currentColor"
                                                  d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
                                        </svg>
                                        <div>A/B Rotation</div>
                                    </li>
                                    <li className="d-flex align-items-center mb-2 flex">
                                        <svg className="svg-inline--fa fa-circle-check fa-fw fa-sm text-success mr-3 mt-1" width='1rem' height='1rem'
                                             aria-hidden="true" focusable="false" data-prefix="fas"
                                             data-icon="circle-check" role="img" xmlns="http://www.w3.org/2000/svg"
                                             viewBox="0 0 512 512" data-fa-i2svg="">
                                            <path fill="currentColor"
                                                  d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
                                        </svg>
                                        <div>Password protection, sensitive content warning</div>
                                    </li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </div>

                <div className="parent pt-16 my-16">
                    <div>
                        <motion.div
                            className="mb-10"
                            initial={{ y: -200, opacity: 0 }}
                            animate={{
                                y: 0,
                                opacity: 1,
                                transition: { duration: 1, type: "spring" },
                            }}
                        >
                            <h1 className="text-4xl font-semibold drop-shadow-md text-center text-accent dark:text-white">
                                QR   <span className="text-primary">Codes</span>
                            </h1>
                            <BottomLine />
                        </motion.div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                            <motion.div
                                initial={{ x: -200, opacity: 0 }}
                                animate={{
                                    x: 0,
                                    opacity: 1,
                                    transition: { duration: 1, delay: 1.25 },
                                }}
                            >
                                <img
                                    src={QrcodeImg}
                                    alt="About BioLink"
                                    className="rounded-2xl w-100 h-80 shadow-2xl transform translate-y-[-12%] hover:shadow-md"
                                    title="About BioLink"
                                />
                            </motion.div>
                            <motion.div
                                initial={{ x: 200, opacity: 0 }}
                                animate={{
                                    x: 0,
                                    opacity: 1,
                                    transition: { duration: 1, delay: 1.25 },
                                }}
                            >
                                <p className="font-medium text-center translate-y-[-60%] sm:translate-y-[-0%] sm:mb-2 md:text-left dark:text-white">
                                    Fully featured QR code generator system with easy to use templates.
                                </p>
                                <br />
                                <ul className="list-style-none mt-4">
                                    <li className="d-flex align-items-center mb-2 flex">
                                        <svg className="svg-inline--fa fa-circle-check fa-fw fa-sm text-success mr-3 mt-1" width='1rem' height='1rem'
                                             aria-hidden="true" focusable="false" data-prefix="fas"
                                             data-icon="circle-check" role="img" xmlns="http://www.w3.org/2000/svg"
                                             viewBox="0 0 512 512" data-fa-i2svg="">
                                            <path fill="currentColor"
                                                  d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
                                        </svg>
                                        <div>Custom colors with gradients</div>
                                    </li>
                                    <li className="d-flex align-items-center mb-2 flex">
                                        <svg className="svg-inline--fa fa-circle-check fa-fw fa-sm text-success mr-3 mt-1" width='1rem' height='1rem'
                                             aria-hidden="true" focusable="false" data-prefix="fas"
                                             data-icon="circle-check" role="img" xmlns="http://www.w3.org/2000/svg"
                                             viewBox="0 0 512 512" data-fa-i2svg="">
                                            <path fill="currentColor"
                                                  d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
                                        </svg>
                                        <div>Multiple QR shapes to choose from</div>
                                    </li>
                                    <li className="d-flex align-items-center mb-2 flex">
                                        <svg className="svg-inline--fa fa-circle-check fa-fw fa-sm text-success mr-3 mt-1" width='1rem' height='1rem'
                                             aria-hidden="true" focusable="false" data-prefix="fas"
                                             data-icon="circle-check" role="img" xmlns="http://www.w3.org/2000/svg"
                                             viewBox="0 0 512 512" data-fa-i2svg="">
                                            <path fill="currentColor"
                                                  d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
                                        </svg>
                                        <div>Custom logo</div>
                                    </li>
                                    <li className="d-flex align-items-center mb-2 flex">
                                        <svg className="svg-inline--fa fa-circle-check fa-fw fa-sm text-success mr-3 mt-1" width='1rem' height='1rem'
                                             aria-hidden="true" focusable="false" data-prefix="fas"
                                             data-icon="circle-check" role="img" xmlns="http://www.w3.org/2000/svg"
                                             viewBox="0 0 512 512" data-fa-i2svg="">
                                            <path fill="currentColor"
                                                  d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
                                        </svg>
                                        <div>Vcard, WiFi, Calendar, Location..etc templates</div>
                                    </li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </div>

                <div className="parent pt-16 my-16">
                    <div>
                        <motion.div
                            className="mb-10"
                            initial={{ y: -200, opacity: 0 }}
                            animate={{
                                y: 0,
                                opacity: 1,
                                transition: { duration: 1, type: "spring" },
                            }}
                        >
                            <h1 className="text-4xl font-semibold drop-shadow-md text-center text-accent dark:text-white">
                                Built-in    <span className="text-primary">analytics</span>
                            </h1>
                            <BottomLine />
                        </motion.div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                            <motion.div
                                initial={{ x: -200, opacity: 0 }}
                                animate={{
                                    x: 0,
                                    opacity: 1,
                                    transition: { duration: 1, delay: 1.25 },
                                }}
                            >
                                <img
                                    src={Analysis}
                                    alt="About BioLink"
                                    className="rounded-2xl w-100 h-80 shadow-2xl transform translate-y-[-12%] hover:shadow-md"
                                    title="About BioLink"
                                />
                            </motion.div>
                            <motion.div
                                initial={{ x: 200, opacity: 0 }}
                                animate={{
                                    x: 0,
                                    opacity: 1,
                                    transition: { duration: 1, delay: 1.25 },
                                }}
                            >
                                <p className="font-medium text-center translate-y-[-60%] sm:translate-y-[-0%] sm:mb-2 md:text-left dark:text-white">
                                    Easy to understand, yet detailed and comprehensive analytics for all your links. GDPR, CCPA and PECR compliant.
                                </p>
                                <br />
                                <ul className="list-style-none mt-4">
                                    <li className="d-flex align-items-center mb-2 flex">
                                        <svg className="svg-inline--fa fa-circle-check fa-fw fa-sm text-success mr-3 mt-1" width='1rem' height='1rem'
                                             aria-hidden="true" focusable="false" data-prefix="fas"
                                             data-icon="circle-check" role="img" xmlns="http://www.w3.org/2000/svg"
                                             viewBox="0 0 512 512" data-fa-i2svg="">
                                            <path fill="currentColor"
                                                  d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
                                        </svg>
                                        <div>Countries & cities</div>
                                    </li>
                                    <li className="d-flex align-items-center mb-2 flex">
                                        <svg className="svg-inline--fa fa-circle-check fa-fw fa-sm text-success mr-3 mt-1" width='1rem' height='1rem'
                                             aria-hidden="true" focusable="false" data-prefix="fas"
                                             data-icon="circle-check" role="img" xmlns="http://www.w3.org/2000/svg"
                                             viewBox="0 0 512 512" data-fa-i2svg="">
                                            <path fill="currentColor"
                                                  d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
                                        </svg>
                                        <div>Referrers & UTMs</div>
                                    </li>
                                    <li className="d-flex align-items-center mb-2 flex">
                                        <svg className="svg-inline--fa fa-circle-check fa-fw fa-sm text-success mr-3 mt-1" width='1rem' height='1rem'
                                             aria-hidden="true" focusable="false" data-prefix="fas"
                                             data-icon="circle-check" role="img" xmlns="http://www.w3.org/2000/svg"
                                             viewBox="0 0 512 512" data-fa-i2svg="">
                                            <path fill="currentColor"
                                                  d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
                                        </svg>
                                        <div>Devices & operating systems</div>
                                    </li>
                                    <li className="d-flex align-items-center mb-2 flex">
                                        <svg className="svg-inline--fa fa-circle-check fa-fw fa-sm text-success mr-3 mt-1" width='1rem' height='1rem'
                                             aria-hidden="true" focusable="false" data-prefix="fas"
                                             data-icon="circle-check" role="img" xmlns="http://www.w3.org/2000/svg"
                                             viewBox="0 0 512 512" data-fa-i2svg="">
                                            <path fill="currentColor"
                                                  d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
                                        </svg>
                                        <div>Browsers, Languages</div>
                                    </li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
