import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { EyeIcon } from '@heroicons/react/24/solid'

const Questions = ({questions}) => {

    const {question,correctAnswer,options} = questions;
    
    // const watchAns = () => {
    //     toast.success(`Answer is ( ${correctAnswer} )`, {
    //         position: "top-center",
    //         autoClose: 3000,
    //         draggable: false
    //     });
    // }

    const rightAnswer = (id) => {
        if (id === correctAnswer) {
            toast.success(" Your Answer is Correct!", {
                position: "top-center",
                autoClose: 2500,
                draggable: false
            });
        } else {
            toast.error("Your Answer is Wrong", {
                position: "top-center",
                autoClose: 2500,
                draggable: false,

            });
        }

    }
 
    
   
   
    return (
        <div className='text-center flex flex-col justify-center items-center shadow-lg p-10 pb-10 rounded-3xl bg-slate-200 mb-12'>
            
            {/* <button type="button" onClick={watchAns} className="  px-8 py-3 md:ml-96 lg:ml-[40rem] bg-slate-500 font-semibold rounded-full "><EyeIcon className="h-6 w-6 text-white"/></button> */}

            <h1 className='text-2xl  md:w-1/2 my-10 font-bold text-orange-600'>Quiz:  {question}</h1>

            <div className=" grid grid:cols-1 md:grid-cols-2 gap-5 ">
            

                {
                    options.map(option => <section key={option}>

                     <div className='border border-orange-300 rounded-2xl bg-white'>
                            <button type="button" id='button' onClick={() => { rightAnswer(option) }} className="px-10 py-5     font-bold">{option}</button>
                            <ToastContainer
                            />
                        </div>
                    </section>)
                }
              
               
            </div>
        </div>
    );
};

export default Questions;