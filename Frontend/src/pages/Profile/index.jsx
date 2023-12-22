import { useState } from "react";
import ProfileAccept from "../../components/atoms/Input/ProfileAccept";
import ProfileTeam from "../../components/atoms/Input/ProfileTeam";
import ProfileContent from "../../components/atoms/Input/ProfileContent";
import LogoTaggy from "../../Assets/images/logo/taggy-black.gif";

import { TbPlayerTrackNext } from "react-icons/tb";

const Profile = () => {
    const [alert, setAlertAccept] = useState("");
    const [alertbtn, setAlertAcceptBtn] = useState(false);
    const [teamname, setTeamname] = useState("");
    const [teamnamebtn, setTeamnamebtn] = useState(false);
    const [profilecontent, setProfileContent] = useState("");
    const [profilecontentbtn, setProfileContentbtn] = useState(false);
    return (
        <div className="pt-10 min-h-screen rounded-sm border border-stroke items-center text-center shadow-default dark:border-strokedark dark:bg-boxdark">
            <img className="rounded-full m-auto my-12" src={LogoTaggy} width={150} />
            {!alertbtn && <ProfileAccept alertaccept={setAlertAccept} acceptbtn={setAlertAcceptBtn}></ProfileAccept>}
            {!teamnamebtn ? alertbtn && <ProfileTeam name={setTeamname} namebtn={setTeamnamebtn}></ProfileTeam>: ''}
            {!profilecontentbtn ? teamnamebtn && <ProfileContent  content={setProfileContent} profilecontentbtn={setProfileContentbtn} ></ProfileContent>: ''}
            {profilecontentbtn && 
                <section className="max-w-xl mx-auto my-4">
                    <div className="w-4/5 mx-auto">
                        <p className="text-3xl font-bold">Congratulation!</p>
                        <p className="text-xl font-bold" >Thank you for answering the questions so well.</p>
                    </div>
                    <div className="w-4/5 mx-auto my-8">
                        <div className="flex">
                            <p className="mx-2 text-sm">
                                Now you can enjoy excellent service, high priority service and world-class design.
                            </p>
                        </div>
                    </div>
                    <a href="/dashboard"><button className='w-4/5 py-1 bg-stroke' onClick={() => {props.acceptbtn(true)}}>Finish</button></a>
                </section>
            }
        </div>
    )
}
export default Profile;