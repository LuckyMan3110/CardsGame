import {useEffect, useState} from "react";
import { ImUpload } from "react-icons/im";
import AvatarModal from "../../Modal/AvatarModal";
import ProfileAvatar from "../ProfileAvatar";
import { TbPlayerTrackNext } from "react-icons/tb";

const ProfileContent = (props) => {
    const [showModal, setShowModal] = useState(false);
    const [avatar, setAvatar]= useState("");
    const handleShow = () => {
        setShowModal(!showModal);
    };
    const handleClose = () => {
        setShowModal(false);
    };
    return (
        <section className="max-w-7xl mx-auto max-h-0">
            <section>
                <p className="text-2xl font-bold m-4 max-sm:text-sm max-sm:m-2">
                    Setting up your profile...
                </p>
                <div className="pt-7">
                    <p className="text-xl max-sm:text-xl">Upload Profile Photo.</p>
                    <p className="text-xl max-sm:text-sm">
                        (We suggest using team logo that people recognize)
                    </p>
                    <div className="">
                        <div className="text-center m-4">
                            <img
                                src={avatar}
                                className="w-36 h-36 rounded-full border-4 m-auto"
                            ></img>
                        </div>
                    </div>
                </div>
                <button className="animate-bounce" onClick={handleShow}><ImUpload className="text-2xl"></ImUpload></button>
                <button className={`my-4 block mx-auto ${avatar == "" ? 'disabled: pointer-events-none' : 'enabled:'}`} onClick={() => {props.profilecontentbtn(true)}}><TbPlayerTrackNext className="text-2xl" /></button>
                {showModal && <AvatarModal title="Upload Avatar" onClose={handleClose}>
                    <ProfileAvatar mainsrc={setAvatar} close={handleClose}/>
                </AvatarModal>}
            </section>
        </section>
    )
}
export default ProfileContent;