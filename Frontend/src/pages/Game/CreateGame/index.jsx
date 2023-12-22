import React, {useState} from 'react';
import {FiBook, FiEdit} from "react-icons/fi";
import { CiLogout } from "react-icons/ci";
import {useDispatch, useSelector} from "react-redux";
import { createGameData } from "../../../config/action";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {DefaultLayout} from "../../../layout/index.jsx";

const CreateGame = () => {
    const [gametype, setGametyp] = useState('');
    const [starddate, setStartdate] = useState('');
    const [enddate, setEnddate] = useState('');
    const [attendnumber, setattendNumber] = useState('');
    const [content, setContent] = useState([]);

    const [question, setQuestion] = useState('');
    const [answer1, setAnswer1] = useState('');
    const [answer2, setAnswer2] = useState('');
    const [answer3, setAnswer3] = useState('');
    const [answer4, setAnswer4] = useState('');
    const [answer5, setAnswer5] = useState('');
    const [answer6, setAnswer6] = useState('');
    const [rightanswer, setRightanswer] = useState();
    const [correctAnswer, setCorrectAnswer] = useState([]);
    const [count, setCount] = useState(0);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        // Prevent the default form submission behavior
        e.preventDefault();
        if(content.length == 10){
            dispatch(createGameData({gametype, starddate, enddate, attendnumber, content, correctAnswer}, navigate))
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Save Game Error',
                text: "Please input all of question and answer!",
            }).then(() => {
            });
        }
    };
    const handleaddGame = (e) => {
        if(content.length == 10){

            Swal.fire({
                icon: 'error',
                title: 'Add Error',
                text: "Already all added",
            }).then(() => {
            });
        }else{
            if(question == '' || answer1 == '' || answer2 == '' || answer3 == '' || answer4 == '' || answer5 == '' || answer6 == '' || rightanswer == ''){
                Swal.fire({
                    icon: 'error',
                    title: 'Add Error',
                    text: "Please input correct value",
                }).then(() => {
                });
            } else{
                let countval = count;
                countval += 1;
                setCount(countval);
                const tempcontent = content;
                const tempcorrectAnswer = correctAnswer;
                e.preventDefault();
                const prevContent = [question, answer1, answer2, answer3, answer4, answer5, answer6];
                tempcontent.push(prevContent);
                tempcorrectAnswer.push(rightanswer);
                setCorrectAnswer(tempcorrectAnswer);
                setContent(tempcontent);
                console.log(tempcontent);
                // setQuestion('');
                // setAnswer1('');
                // setAnswer2('');
                // setAnswer3('');
                // setAnswer4('');
                // setAnswer5('');
                // setAnswer6('');
            }
        }
    }
    const goBack = () => {
        // Navigate back to the previous URL
        navigate(-1);
    };
    return (
        <form onSubmit={handleSubmit}>
            <div className="flex py-4 px-4 md:px-6 dark:border-strokedark text-lg">
                <p className="text-3xl font-extrabold font-medium text-black dark:text-black text-center md:text-left">
                    Create Game
                </p>
                <div className="text-4xl font-bold pt-1 ml-auto" onClick={goBack}><CiLogout/></div>
            </div>
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark mt-2">
                <div className="flex flex-col md:flex-row bg-gray px-4 pt-2">
                    <div className="mb-4 mx-4">
                        <label className='mb-2.5 block font-medium text-black dark:text-black'>
                            Questions Type
                        </label>
                        <select className="p-4 rounded-lg" value={gametype} onChange={(e) => setGametyp(e.target.value)}>
                            <option>Feeling Nostalgic</option>
                            <option>Play CAH with your kids</option>
                            {/* <option>Emptiness Redesigned</option> */}
                            {/* <option>For Whatever you are into</option> */}
                            {/* <option>America's #1 gerbil coffin</option> */}
                        </select>
                    </div>
                    <div className='mb-4 mx-4'>
                        <label className='mb-2.5 block font-medium text-black dark:text-black'>
                            Start Date
                        </label>
                        <div className='relative'>
                            <input
                                type='date'
                                value={starddate}
                                onChange={(e) => setStartdate(e.target.value)}
                                autoComplete='off'
                                required
                                className='w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
                            />
                        </div>
                    </div>
                    <div className='mb-4 mx-4'>
                        <label className='mb-2.5 block font-medium text-black dark:text-black'>
                            End Date
                        </label>
                        <div className='relative'>
                            <input
                                type='date'
                                value={enddate}
                                onChange={(e) => setEnddate(e.target.value)}
                                autoComplete='off'
                                required
                                className='w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
                            />
                        </div>
                    </div>
                    <div className='mb-4 mx-4'>
                        <label className='mb-2.5 block font-medium text-black dark:text-black'>
                            Attend Number
                        </label>
                        <div className='relative'>
                            <input
                                type='text'
                                value={attendnumber}
                                onChange={(e) => setattendNumber(e.target.value)}
                                autoComplete='off'
                                required
                                className='w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
                            />
                            <FiBook className='absolute right-4 top-4 text-xl' />
                        </div>
                    </div>
                    <div className="ml-auto w-24 h-24 bg-meta-9 p-4 rounded-full border-4 shadow-2 border-b-black-2"><p className="text-center text-6xl text-black font-bold">{count <= 9 && count + 1}</p></div>
                </div>
                <div className="px-4 md:px-20 py-4 md:py-16">
                    <div className="flex">
                        <div className="md:w-1/2 md:text-lg py-4">
                            <div className='mb-4 mx-4'>
                                <label className='mb-2.5 block font-medium text-black dark:text-white'>
                                    Question
                                </label>
                                <div className='relative'>
                                    <input
                                        type='text'
                                        value={question}
                                        onChange={(e) => setQuestion(e.target.value)}
                                        autoComplete='off'
                                        required
                                        className='w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
                                    />
                                    <FiEdit className='absolute right-4 top-4 text-xl' />
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2 md:text-lg py-4">
                            <div className='mb-4 mx-4'>
                                <label className='mb-2.5 block font-medium text-black dark:text-white'>
                                    Correct Answer
                                </label>
                                <div className='relative'>
                                    <input
                                        type='text'
                                        value={rightanswer}
                                        onChange={(e) => setRightanswer(e.target.value)}
                                        autoComplete='off'
                                        required
                                        className='w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
                                    />
                                    <FiEdit className='absolute right-4 top-4 text-xl' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex w-full md:text-lg">
                        <div className="w-1/2 mx-auto">
                            <div className='mb-4 mx-4'>
                                <label className='mb-2.5 block font-medium text-black dark:text-white'>
                                    Answer 1
                                </label>
                                <div className='relative'>
                                    <input
                                        type='text'
                                        value={answer1}
                                        onChange={(e) => setAnswer1(e.target.value)}
                                        autoComplete='off'
                                        required
                                        className='w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
                                    />
                                    <FiEdit className='absolute right-4 top-4 text-xl' />
                                </div>
                            </div>
                            <div className='mb-4 mx-4'>
                                <label className='mb-2.5 block font-medium text-black dark:text-white'>
                                    Answer 2
                                </label>
                                <div className='relative'>
                                    <input
                                        type='text'
                                        value={answer2}
                                        onChange={(e) => setAnswer2(e.target.value)}
                                        autoComplete='off'
                                        required
                                        className='w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
                                    />
                                    <FiEdit className='absolute right-4 top-4 text-xl' />
                                </div>
                            </div>
                            <div className='mb-4 mx-4'>
                                <label className='mb-2.5 block font-medium text-black dark:text-white'>
                                    Answer 3
                                </label>
                                <div className='relative'>
                                    <input
                                        type='text'
                                        value={answer3}
                                        onChange={(e) => setAnswer3(e.target.value)}
                                        autoComplete='off'
                                        required
                                        className='w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
                                    />
                                    <FiEdit className='absolute right-4 top-4 text-xl' />
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <div className='mb-4 mx-4'>
                                <label className='mb-2.5 block font-medium text-black dark:text-white'>
                                    Answer 4
                                </label>
                                <div className='relative'>
                                    <input
                                        type='text'
                                        value={answer4}
                                        onChange={(e) => setAnswer4(e.target.value)}
                                        autoComplete='off'
                                        required
                                        className='w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
                                    />
                                    <FiEdit className='absolute right-4 top-4 text-xl' />
                                </div>
                            </div>
                            <div className='mb-4 mx-4'>
                                <label className='mb-2.5 block font-medium text-black dark:text-white'>
                                    Answer 5
                                </label>
                                <div className='relative'>
                                    <input
                                        type='text'
                                        value={answer5}
                                        onChange={(e) => setAnswer5(e.target.value)}
                                        autoComplete='off'
                                        required
                                        className='w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
                                    />
                                    <FiEdit className='absolute right-4 top-4 text-xl' />
                                </div>
                            </div>
                            <div className='mb-4 mx-4'>
                                <label className='mb-2.5 block font-medium text-black dark:text-white'>
                                    Answer 6
                                </label>
                                <div className='relative'>
                                    <input
                                        type='text'
                                        value={answer6}
                                        onChange={(e) => setAnswer6(e.target.value)}
                                        autoComplete='off'
                                        required
                                        className='w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
                                    />
                                    <FiEdit className='absolute right-4 top-4 text-xl' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <input type='button' className="mt-6 mx-auto w-1/3 p-4 rounded-lg border-2 text-xl" onClick={handleaddGame} value="Next"></input>
                        <input type='submit' className="mt-6 mx-auto w-1/3 p-4 rounded-lg border-2 text-xl" value="Save Game"></input>
                    </div>
                </div>
            </div>
        </form>
    )
}
export default CreateGame;