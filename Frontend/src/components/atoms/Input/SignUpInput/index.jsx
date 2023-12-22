import React, { useState, useEffect } from 'react';
import { FiUser, FiLock, FiAirplay } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { signupUser } from '../../../../config/action';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function SignUpInput() {
  const [username, setUsername] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isError, isSuccess, isLoading, message } = useSelector((state) => state.auth);

  const handleSignUp = async (e) => {
    e.preventDefault();
    dispatch(signupUser({ username, mail, password, password2 }));
  }

  useEffect(() => {
    if (user || isSuccess) {
      navigate("/signin");
    }
  }, [user, isSuccess, dispatch, navigate]);

  useEffect(() => {
    if (isError) {
      Swal.fire({
        icon: 'error',
        title: 'Sign UP Error',
        text: message,
      }).then(() => {
      });
    } else if (isSuccess && user) {
      Swal.fire({
        icon: 'success',
        title: 'Sign Up Success',
        text: message,
        timer: 1500,
      }).then(() => {
      });
    }
  }, [isError, isSuccess, user, message, dispatch]);

  return (
    <form onSubmit={handleSignUp}>
      <div className='mb-4'>
        <label className='mb-2.5 block font-medium text-black dark:text-white'>
          Username
        </label>
        <div className='relative'>
          <input
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete='off'
            required
            placeholder='username'
            className='w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
          />
          <FiUser className='absolute right-4 top-4 text-xl' />
        </div>
      </div>

      <div className='mb-4'>
        <label className='mb-2.5 block font-medium text-black dark:text-white'>
          Email address
        </label>
        <div className='relative'>
          <input
              type='text'
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              autoComplete='off'
              required
              placeholder='Input Email address'
              className='w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
          />
          <FiUser className='absolute right-4 top-4 text-xl' />
        </div>
      </div>
      <div className='mb-6'>
        <label className='mb-2.5 block font-medium text-black dark:text-white'>
          Password
        </label>
        <div className='relative'>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder='Input password'
            className='w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
          />
          <FiLock className='absolute right-4 top-4 text-xl' />
        </div>
      </div>

      <div className='mb-6'>
        <label className='mb-2.5 block font-medium text-black dark:text-white'>
          Password Confirm
        </label>
        <div className='relative'>
          <input
            type='password'
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
            required
            placeholder='Confirm password'
            className='w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
          />
          <FiLock className='absolute right-4 top-4 text-xl' />
        </div>
      </div>

      <div className='mb-5 flex'>
        <input
            type='submit'
            value={isLoading ? "Loading..." : "Sign Up"}
            className='w-1/4 cursor-pointer rounded-lg border border-primary bg-primary p-2 text-white my-2 transition hover:bg-opacity-90'
        />
        <a
            type='button'
            href='/signin'
            className='cursor-pointer mx-4 my-auto'
        >Sign In right now?</a>
      </div>
    </form>
  );
}

export default SignUpInput;
