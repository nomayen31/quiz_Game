import React from 'react';
import { useLoaderData } from 'react-router';
// import header from '../../img/header3.jpg'
import Quiz from '../Quiz/Quiz';
import '../Home/Home.css'





const Home = () => {
    const allQuiz = useLoaderData();
     const quizTopics = allQuiz.data;
    
    
    return (
        <div style={{margin:'0px 5rem'}} className="">


        <div className='grid grid-cols-1' >

           <div className="header-image">
            
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