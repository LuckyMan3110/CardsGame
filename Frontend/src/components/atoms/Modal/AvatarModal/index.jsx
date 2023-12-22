import { FaWindowClose } from "react-icons/fa";
import {motion} from "framer-motion";
const AvatarModal = (props) => {
    return (
        <div
            className="absolute 0 top-0 flex h-screen w-full items-center justify-center bg-[#000000AA]">
            <motion.div
                className="relative rounded bg-white shadow w-96">
                <div className="flex w-full rounded-t px-5 font-bold py-5 items-center justify-between text-3xl text-white bg-danger">
                    <div>{props.title}</div>
                    <button onClick={props.onClose}>
                        <FaWindowClose />
                    </button>
                </div>
                <div className="px-5 py-5 text-xl">
                    <div>{props.children}</div>
                </div>
            </motion.div>
        </div>
    );
}
export default AvatarModal;