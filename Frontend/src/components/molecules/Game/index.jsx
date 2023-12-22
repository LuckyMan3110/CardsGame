import React, {useEffect, useState} from "react";
import "../../../shared/Shared.css";
import {GiCardRandom} from "react-icons/gi";
import Swal from "sweetalert2";
import {useLocation} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {setUserGameData} from "../../../config/action/index.js";
import {CiLogout} from "react-icons/ci";
const Game = () => {
    const { search } = useLocation();
    const params = new URLSearchParams(search);
    const gameId = params.get("gameId");
    const { user } = useSelector((state) => state.auth);
    const { isSuccess, dataAllGame } = useSelector((state) => state.game);
    const targetObject = dataAllGame.find((item) => item._id === gameId);
    const contentOfAfds = targetObject ? targetObject.content : null;

    const [selectedCardIndex, setSelectedCardIndex] = useState(0);
    const [selectedCards, setSelectedCards] = useState([]);
    const [values, setValues] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [cards, setCards] = useState([]);
    const [lastSelectedIndex, setLastSelectedIndex] = useState(null);

    //animation
    const [isTransitioning, setIsTransitioning] = useState(false);
    useEffect(() => {
        if (contentOfAfds !== null && contentOfAfds.length === 10) {
            setCards(contentOfAfds.map(item => [item.question, item.answer1, item.answer2, item.answer3, item.answer4, item.answer5, item.answer6]));
        } else {
            setCards([]);
        }
    }, [contentOfAfds]);


    const rotate = [
        ["rotate-12", "-rotate-12", "rotate-12", "rotate-45", "-rotate-45", "-rotate-12", "-rotate-12"],
        ["-rotate-12", "-rotate-12", "rotate-12", "rotate-45", "-rotate-45", "-rotate-12", "rotate-12"],
        ["-rotate-12", "-rotate-12", "rotate-12", "rotate-45", "-rotate-45", "-rotate-12", "rotate-12"],
        ["-rotate-12", "-rotate-12", "rotate-12", "rotate-45", "-rotate-45", "-rotate-12", "rotate-12"],
        ["-rotate-12", "-rotate-12", "rotate-12", "rotate-45", "-rotate-45", "-rotate-12", "rotate-12"],
        ["-rotate-12", "-rotate-12", "rotate-12", "rotate-45", "-rotate-45", "-rotate-12", "rotate-12"],
        ["-rotate-12", "-rotate-12", "rotate-12", "rotate-45", "-rotate-45", "-rotate-12", "rotate-12"],
        ["-rotate-12", "-rotate-12", "rotate-12", "rotate-45", "-rotate-45", "-rotate-12", "rotate-12"],
        ["-rotate-12", "-rotate-12", "rotate-12", "rotate-45", "-rotate-45", "-rotate-12", "rotate-12"],
        ["-rotate-12", "-rotate-12", "rotate-12", "rotate-45", "-rotate-45", "-rotate-12", "rotate-12"],
    ];
    const pos_x = [
        ["left-150", "left-10", "left-100", "left-80", "right-80", "right-20", "right-100"],
        ["left-150", "left-20", "left-80", "left-120", "left-100", "left-60", "right-20"],
        ["left-150", "left-10", "left-100", "left-80", "right-80", "right-20", "right-100"],
        ["left-150", "left-60", "left-100", "right-80", "right-100", "left-40", "right-20"],
        ["left-150", "left-10", "left-100", "left-80", "right-80", "right-20", "right-100"],
        ["left-150", "left-20", "left-100", "right-100", "right-100", "left-60", "right-20"],
        ["left-150", "left-10", "left-100", "left-80", "right-80", "right-20", "right-100"],
        ["left-150", "left-20", "left-100", "right-100", "right-100", "left-60", "right-20"],
        ["left-150", "left-30", "left-100", "left-50", "right-80", "right-20", "right-100"],
        ["left-150", "left-20", "left-100", "right-100", "right-100", "left-60", "right-20"],
    ];
    const pos_y = [
        ["top-60", "top-40", "top-20", "top-100", "top-20", "top-40", "top-100"],
        ["top-40", "top-20", "top-20", "top-60", "top-125", "top-100", "top-80"],
        ["top-60", "top-40", "top-20", "top-100", "top-20", "top-40", "top-100"],
        ["top-40", "top-20", "top-20", "top-60", "top-125", "top-100", "top-80"],
        ["top-60", "top-40", "top-20", "top-100", "top-20", "top-40", "top-100"],
        ["top-40", "top-20", "top-20", "top-60", "top-125", "top-100", "top-80"],
        ["top-60", "top-40", "top-20", "top-100", "top-20", "top-40", "top-100"],
        ["top-40", "top-20", "top-20", "top-60", "top-125", "top-100", "top-80"],
        ["top-60", "top-40", "top-20", "top-100", "top-20", "top-40", "top-100"],
        ["top-40", "top-20", "top-20", "top-60", "top-125", "top-100", "top-80"],
    ]

    const handleCardSelect = (value, index) => {
        if(selectedCards.length == 9){
            dispatch(setUserGameData({gameID: gameId, email: user.email, values: values}, navigate));
            Swal.fire({
                icon: 'success',
                title: 'Conform message',
                text: "You are join the Game successfully",
            }).then(() => {
            });
        }else {
            if(value != cards[selectedCardIndex][0]){
                const selectedCard = cards[selectedCardIndex][selectedCards.length];

                // setIsTransitioning(true);
                // Update the selected card index to move to the next card
                setSelectedCardIndex((prevIndex) => (prevIndex + 1) % 10);

                // Update the array of selected cards
                setSelectedCards((prevSelectedCards) => [...prevSelectedCards, selectedCard]);

                const tempvalue = values;
                tempvalue.push(value);
                setValues(tempvalue);
            }
        }
    };
    const goBack = () => {
        // Navigate back to the previous URL
        navigate(-1);
    };
    useEffect(() => {
        setIsTransitioning(true);

        // Set a timeout to reset the transition state after a short delay
        setTimeout(() => {
            setIsTransitioning(false);
        }, 500); // Adjust the delay based on your transition duration
    }, [selectedCardIndex]);
    return (
        <div className='relative border-b-2 border-stone-800'>
            <div className="absolute inset-0 bg-no-repeat bg-stone-900 dark:bg-[#0B1120] index_beams__yWcJT">
                <div
                    className="absolute inset-x-0 bottom-0 h-full text-slate-600/10 [mask-image:linear-gradient(to_bottom,transparent,white)]">
                    <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="pricing-pattern" width="32" height="32" patternUnits="userSpaceOnUse" x="50%" y="100%"
                                     patternTransform="translate(0 -1)">
                                <path d="M0 32V.5H32" fill="none" stroke="currentColor"></path>
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#pricing-pattern)"></rect>
                    </svg>
                </div>
            </div>
            <div className="flex pt-30 min-h-[100vh] dark:bg-boxdark ">
                {cards.map((card, index) => (
                    index < cards[selectedCardIndex].length &&
                    (<div key={index}>
                        <div onClick={() => {handleCardSelect(cards[selectedCardIndex][index], index)}}>
                            <div className={`
                            absolute
                            ${pos_x[selectedCardIndex][index]}
                            ${pos_y[selectedCardIndex][index]} 
                            ${rotate[selectedCardIndex][index]} 
                            ${index==0 ? "z-1 bg-black text-white": "z-0 bg-white text-black"} 
                            mx-4
                            w-80
                            h-115
                            shadow-2
                            rounded-2xl
                            border-4
                            hover:z-50 
                            hover:cursor-pointer 
                            hover:rotate-0
                            ${isTransitioning ? 'animate-ping' : `transform scale-100 ${pos_x[selectedCardIndex][index]} ${pos_y[selectedCardIndex][index]}  duration-500`}
                        `}>
                                <div className="h-4/5">
                                    <p className="p-8 text-3xl font-extrabold">{cards[selectedCardIndex][index]}</p>
                                </div>
                                <div className="h-1/5 flex border-t-2">
                                    <p className="pl-8 pt-6"><GiCardRandom className="text-3xl"/></p>
                                    <p className="pl-4 pt-8 font-bold text-sm">Cards Against Humanity</p>
                                </div>
                            </div>
                        </div>
                    </div>)

                ))}
                <div className="absolute top-10 right-10 text-5xl bg-meta-9 rounded-full p-1 font-bold pt-1 hover:bg-meta-4" onClick={goBack}><CiLogout/></div>
                <p className="absolute left-10 w-80 top-10 text-6xl text-black font-bold dark:text-white">Cards Against Humanity</p>
                <div className="absolute left-10 bottom-10 w-24 h-24 bg-meta-9 p-4 rounded-full border-2 shadow-2 border-b-black-2"><p className="text-center text-6xl text-black font-bold">{values.length != 10 && values.length + 1}</p></div>
            </div>
        </div>
    );
};

export default Game;