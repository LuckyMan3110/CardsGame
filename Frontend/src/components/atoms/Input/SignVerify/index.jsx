import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { verifyUser } from "../../../../config/action";
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Verify = () => {
    const [codeone, setCodeone] = useState("");
    const [codetwo, setCodetwo] = useState("");
    const [codethree, setCodethree] = useState("");
    const [codefour, setCodefour] = useState("");
    const [codefive, setCodefive] = useState("");
    const [codesix, setCodesix] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { user, isError, isSuccess, isLoading, message } = useSelector((state) => state.auth);

    const handleVerify = async (e) => {
        e.preventDefault();
        if (codeone != "" && codetwo != "" && codethree != "" && codefour != "" && codefive != "" && codesix != "") {
            var verifycode = codeone + codetwo + codethree + codefour + codefive + codesix;
            var member_id = "";
            dispatch(verifyUser({ verifycode, member_id }));
        }
    }

    useEffect(() => {
        if (user || isSuccess) {
            navigate("/dashboard");
        }
    }, [user, isSuccess, dispatch, navigate]);

    useEffect(() => {
        if (isError) {
            Swal.fire({
                icon: 'error',
                title: 'Login Fail',
                text: message,
            }).then(() => {
            });
        } else if (isSuccess && user) {
            Swal.fire({
                icon: 'success',
                title: 'Login Successful',
                text: message,
                timer: 1500,
            }).then(() => {
            });
        }
    }, [isError, isSuccess, user, message, dispatch]);

    return (
        <form className="text-xl text-center max-sm:text-sm" onSubmit={handleVerify}>
            <input
                type="text"
                className="m-4 rounded-lg w-[50px] p-4 bg-stone-200 outline-stone-400 text-center max-sm:p-2 max-sm:mx-1 max-sm:w-[30px] max-sm:py-2"
                id="codeone"
                maxLength={1}
                size={1}
                onInput={(e) => { if (e.target.value != ' ') { setCodeone(e.target.value); document.getElementById("codetwo").focus() } }}
                required={true}
            ></input>
            <input
                type="text"
                className="m-4 rounded-lg w-[50px] p-4 bg-stone-200 outline-stone-400 text-center max-sm:p-2 max-sm:mx-1 max-sm:w-[30px] max-sm:py-2"
                id="codetwo"
                maxLength={1}
                size={1}
                onInput={(e) => { if (e.target.value != ' ') { setCodetwo(e.target.value); document.getElementById("codethree").focus() } }}
                required={true}
            ></input>
            <input
                type="text"
                className="m-4 rounded-lg w-[50px] p-4 bg-stone-200 outline-stone-400 text-center max-sm:p-2 max-sm:mx-1 max-sm:w-[30px] max-sm:py-2"
                id="codethree"
                maxLength={1}
                size={1}
                onInput={(e) => { if (e.target.value != ' ') { setCodethree(e.target.value); document.getElementById("codefour").focus() } }}
                required={true}
            ></input>
            <input
                type="text"
                className="m-4 rounded-lg w-[50px] p-4 bg-stone-200 outline-stone-400 text-center max-sm:p-2 max-sm:mx-1 max-sm:w-[30px] max-sm:py-2"
                id="codefour"
                maxLength={1}
                size={1}
                onInput={(e) => { if (e.target.value != ' ') { setCodefour(e.target.value); document.getElementById("codefive").focus() } }}
                required={true}
            ></input>
            <input
                type="text"
                className="m-4 rounded-lg w-[50px] p-4 bg-stone-200 outline-stone-400 text-center max-sm:p-2 max-sm:mx-1 max-sm:w-[30px] max-sm:py-2"
                id="codefive"
                maxLength={1}
                size={1}
                onInput={(e) => { if (e.target.value != ' ') { setCodefive(e.target.value); document.getElementById("codesix").focus() } }}
                required={true}
            ></input>
            <input
                type="text"
                className="m-4 rounded-lg w-[50px] p-4 bg-stone-200 outline-stone-400 text-center max-sm:p-2 max-sm:mx-1 max-sm:w-[30px] max-sm:py-2"
                id="codesix"
                maxLength={1}
                size={1}
                onInput={(e) => { if (e.target.value != ' ') { setCodesix(e.target.value); document.getElementById("submit").focus() } }}
                required={true}
            ></input>
            <button
                type="submit"
                className="block m-auto text-stone-50 rounded-lg px-12 py-1 max-sm:px-8 max-sm:text-xs"
                id="submit"
            >
                Submit
            </button>
        </form>
    );
}
export default Verify;