import React from 'react';
import { useLoaderData } from 'react-router';
// import header from '../../img/header3.jpg'
import Quiz from '../Quiz/Quiz';





const Home = () => {
    const allQuiz = useLoaderData();
     const quizTopics = allQuiz.data;
    
    
    return (
        <div style={{margin:'0px 5rem'}} className="">


        <div className='grid grid-cols-1' >

           <div className="">
            <h1 className='text-6xl mt-32 font-bold  leading tracking-wide opacity-82 mb-20'>The Smarter <br /> Way to Learn is<br />  <span className=' text-6xl text-orange-400'> Practicing QUIZ.</span></h1>

         </div>
           
        
          
          <div className="mt-10 ">
          {/* <img className=' rounded-lg' src={header} alt="" /> */}
          </div>
    </div>


            <div className="quiz grid lg:grid-cols-2 grid-cols-1 md:grid-cols-2 mt-32 gap-10">
                {
                    quizTopics.map(quiz => <Quiz key={quiz.id} quiz={quiz}></Quiz>)
                }
            </div>



        </div>
    );
};

export default Home;