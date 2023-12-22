import { motion } from "framer-motion";
import { GiCardRandom } from "react-icons/gi";

const Cardfront = ({rotate = 0, pos_x, pos_y, z_dex = 0, text=""}) => {

    return(
        <div className={`block left-0 top-60 mx-4 w-80 h-115 shadow-2 bg-white rounded-2xl border-4 rotate-${rotate} z-0 hover:z-50`}>
            <div className="h-4/5">
                <p className="p-8 text-3xl font-extrabold text-black">{text}</p>
            </div>
            <div className="h-1/5 flex border-t-2">
                <p className="pl-8 pt-6"><GiCardRandom className="text-3xl"/></p>
                <p className="pl-4 pt-8 font-bold text-sm">Cards Against Humanity</p>
            </div>
        </div>
    )
}
export default Cardfront;