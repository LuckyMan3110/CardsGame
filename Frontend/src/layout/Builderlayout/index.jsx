import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { SidebarAdmin, SidebarUser, Header, Footer } from '../../components';

const BuilderLayout = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { user } = useSelector((state) => state.auth);

    return (
        <div className='dark:bg-boxdark-2 dark:text-bodydark'>
            {/* <!-- ===== Page Wrapper Start ===== --> */}
            <div className='flex h-screen overflow-hidden'>
                {/* <!-- ===== Sidebar Admin Start ===== --> */}
                {user && user.access_type === "admin" && (
                    <SidebarAdmin sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                )}
                {/* <!-- ===== Sidebar Admin End ===== --> */}

                {/* <!-- ===== Sidebar Pegawai Start ===== --> */}
                {user && user.access_type === "user" && (
                    <SidebarUser sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                )}
                {/* <!-- ===== Sidebar Pegawai End ===== --> */}

                {/* <!-- ===== Content Area Start ===== --> */}
                <div className='relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden'>
                    {/* <!-- ===== Header Start ===== --> */}
                    <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                    {/* <!-- ===== Header End ===== --> */}

                    {/* <!-- ===== Main Content Start ===== --> */}
                    <main>
                        <div className='mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10'>
                            {children}
                        </div>
                    </main>
                    {/* <!-- ===== Main Content End ===== --> */}
                    <Footer />
                </div>
                {/* <!-- ===== Content Area End ===== --> */}
            </div>
            {/* <!-- ===== Page Wrapper End ===== --> */}
        </div>
    )
}

export default BuilderLayout;
