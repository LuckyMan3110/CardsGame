import React, { useState, useEffect, useRef } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import Logo from '../../../../assets/images/logo/logo.png'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { RxDashboard } from 'react-icons/rx'
import { FiDatabase, FiSettings } from 'react-icons/fi'
import { BiLogOutCircle } from "react-icons/bi";
import { GiUpgrade } from "react-icons/gi";
import { logoutUser } from '../../../../config/action'
import { useDispatch } from "react-redux";
import Swal from 'sweetalert2';
import { reset } from '../../../../config/redux/reducer/authReducer'

const SidebarUser = ({ sidebarOpen, setSidebarOpen }) => {
  const location = useLocation()
  const { pathname } = location
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const trigger = useRef(null)
  const sidebar = useRef(null)

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded')
  const [sidebarExpanded, setSidebarExpanded] = useState(
      storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
  )

  const onLogout = () => {
    Swal.fire({
      title: 'Confirmation',
      text: 'Are you sure you want to exit?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'NO',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(logoutUser());
        dispatch(reset())
        Swal.fire({
          title: 'Logout Successful',
          text: 'You have successfully exited.',
          icon: 'success',
          timer: 1500,
          timerProgressBar: true,
          showConfirmButton: false
        }).then(() => {
          navigate('/signin');
        });
      }
    });
  };

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return
      if (
          !sidebarOpen ||
          sidebar.current.contains(target) ||
          trigger.current.contains(target)
      )
        return
      setSidebarOpen(false)
    }
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return
      setSidebarOpen(false)
    }
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded)
    if (sidebarExpanded) {
      document.querySelector('body').classList.add('sidebar-expanded')
    } else {
      document.querySelector('body').classList.remove('sidebar-expanded')
    }
  }, [sidebarExpanded])

  return (
      <aside
          ref={sidebar}
          className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        {/* <!-- SIDEBAR HEADER --> */}
        <div className='flex items-center justify-center px-6 py-5.5 lg:py-6.5 object-cover'>
          <NavLink to='/dashboard'>
            <img
                src={Logo}
                alt='Logo QAGame'
                className='w-20'
                title='Logo QAGame'
            />
          </NavLink>

          <button
              ref={trigger}
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-controls='sidebar'
              aria-expanded={sidebarOpen}
              className='mx-4 block lg:hidden'
          >
            <AiOutlineArrowLeft className="text-xl" />
          </button>

        </div>
        {/* <!-- SIDEBAR HEADER --> */}

        {/* <!-- SIDEBAR Content --> */}
        <div className='grow no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear'>
          <nav className='mt-4 px-4 lg:mt-9 lg:px-6'>
            <div>

              <ul className='mb-6 flex flex-col gap-1.5'>
                {/* <!--Home User--> */}

                <NavLink
                    to='/dashboard'
                    className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${pathname.includes('dashboard') &&
                    'bg-graydark dark:bg-meta-4'
                    }`}
                >
                  <RxDashboard />
                  Dashboard
                </NavLink>

                {/* <!-- Home User --> */}

                {/* <!-- Theme Packs --> */}
                {/* <NavLink
                    to='/themepack'
                    className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${pathname.includes('customdomain') &&
                    'bg-graydark dark:bg-meta-4'
                    }`}
                >
                  <FiDatabase />
                  Theme Packs
                </NavLink> */}
                {/* <!-- Theme Packs --> */}

                {/* <!-- Stuff --> */}
                {/* <NavLink
                    to='/pixels'
                    className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${pathname.includes('pixels') &&
                    'bg-graydark dark:bg-meta-4'
                    }`}
                >
                  <FiDatabase />
                  Stuffs
                </NavLink> */}
                {/* <!-- Stuff --> */}

                {/* <!-- Settings --> */}
                {/* <NavLink
                    to='/projects'
                    className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${pathname.includes('projects') &&
                    'bg-graydark dark:bg-meta-4'
                    }`}
                >
                  <FiDatabase />
                  Settings
                </NavLink> */}
                {/* <!-- Settings --> */}
              </ul>
            </div>
          </nav>
        </div>

        {/* <!-- SIDEBAR Footer --> */}
        <div className='no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear'>
          <nav className='mt-4 px-4 lg:mt-9 lg:px-6'>
            <div>

              <ul className='mb-6 flex flex-col gap-1.5'>
                {/* <!--Premium--> */}

                {/* <NavLink
                    to='/builderpremium'
                    className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${pathname.includes('builderpremium') &&
                    'bg-graydark dark:bg-meta-4'
                    }`}
                >
                  <GiUpgrade />
                  Upgrade to Premium
                </NavLink> */}

                {/* <!-- Premium --> */}

                <div className="w-full h-2 border-b-2"></div>

                {/* <!-- Log out --> */}
                <NavLink
                    onClick={onLogout}
                    className={({ isActive }) =>
                        'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                        (isActive && '!text-white')
                    }
                >
                  <BiLogOutCircle/>
                  Log Out
                </NavLink>

                {/* <!-- Log out --> */}

              </ul>
            </div>
          </nav>
        </div>
        {/* <!-- SIDEBAR Footer --> */}
      </aside>
  )
}

export default SidebarUser;
