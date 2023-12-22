import {TbPlayerTrackNext} from "react-icons/tb";
import {useState} from "react";

const ProfileTeam = (props) => {
    const [teamname, setTeamname]= useState("");
    return (
        <section className="max-w-4xl max-sm:max-w-full mx-auto">
            <p className="text-2xl font-bold m-4 max-sm:text-sm max-sm:m-2">
                Congrats! You're about to turn your store inot a collaborative
                buying experience for customers on taggy app.
            </p>
            <p className="text-xl m-4 p-4 font-bold max-sm:text-xl">
                Let's set up your profile.
            </p>
            <div className="pt-4">
                <p className="text-xl max-sm:text-xl">Enter your Team name.</p>
                <p className="text-xl max-sm:text-sm">
                    (this will be your official team name)
                </p>
                <input
                    type="text"
                    className="m-4 rounded-lg w-[450px] px-4 py-4 bg-stone-200 outline-stone-400 max-sm:w-[250px] max-sm:py-2"
                    value={teamname}
                    onChange={(e) => {props.name(e.target.value); setTeamname(e.target.value)}}
                    required={true}
                ></input>
            </div>
            <button className={`my-4 ${teamname == "" ? 'disabled: pointer-events-none' : 'enabled:'}`} onClick={() => {props.namebtn(true)}}><TbPlayerTrackNext className="text-2xl" /></button>
        </section>
    )
}
export default ProfileTeam;