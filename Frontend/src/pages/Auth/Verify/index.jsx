import React from 'react';
import Logo from '../../../Assets/images/logo/logo.png';
import { SignVerify } from '../../../components';

function Verify() {
    return (
        <div className="pt-10 min-h-screen rounded-sm border border-stroke items-center text-center shadow-default dark:border-strokedark dark:bg-boxdark">
            <img className="rounded-full m-auto my-12" src={Logo} width={150}/>
            <section className="m-auto max-w-4xl max-sm:max-w-full">
                <p className="text-2xl font-bold m-4 max-sm:text-sm max-sm:m-2">
                    Enter the one time password code from your email.
                </p>
                <div className="pt-4">
                    <button className="text-xl max-sm:text-sm">
                        Click here to resend the code.
                    </button>
                    <SignVerify></SignVerify>
                </div>
            </section>
        </div>
    );
};

export default Verify;