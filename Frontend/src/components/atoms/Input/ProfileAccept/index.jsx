import { useState } from "react";

const ProfileAccept = (props) => {
    const [accept, setAccept] = useState("");
    return(
        <section className="max-w-xl mx-auto my-4">
            <div className="w-4/5 mx-auto">
                <p className="text-3xl font-bold">Hi there?</p>
                <p className="text-xl font-bold" >Before we get started, can we send you emails and do you agree with Taggy's terms?</p>
            </div>
            <div className="w-4/5 mx-auto my-8">
                <div className="flex">
                    <input type="checkbox" className="text-2xl mx-2" onChange={(e) => { setAccept(e.target.value)}}></input>
                    <p className="mx-2 text-sm">
                        I have read and accept the terms of service and privacy policy
                    </p>
                </div>
                <div className="flex">
                    <input type="checkbox" className="text-2xl mx-2" onChange={(e) => {props.alertaccept(e.target.value)}}></input>
                    <p className="mx-2 text-sm">
                        I want to receive news about Uizard services by email
                    </p>
                </div>
            </div>
            <button className={`w-4/5 py-1 bg-stroke ${accept ? 'enabled: ' : 'disabled: pointer-events-none'}`} onClick={() => {props.acceptbtn(true)}}>Accept</button>
        </section>
    )
}
export default ProfileAccept;