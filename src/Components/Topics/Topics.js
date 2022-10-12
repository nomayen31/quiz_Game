import React from 'react';
import { useLoaderData } from 'react-router';
import Quiz from '../Quiz/Quiz';

const Topics = () => {
    const allQuiz = useLoaderData();
    const quizTopics = allQuiz.data;
    return (
        <div>
              <div className="quiz grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 mt-32 gap-10">
                {
                    quizTopics.map(quiz => <Quiz key={quiz.id} quiz={quiz}></Quiz>)
                }
            </div>
        </div>
    );
};

export default Topics;