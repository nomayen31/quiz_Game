import React from 'react';
import { useLoaderData } from 'react-router';
import { LineChart, Line, CartesianGrid, XAxis, YAxis , Tooltip } from 'recharts';

const Statistics = () => {

    const totalQuizQuestion = useLoaderData().data;
    

  const quizQ =    totalQuizQuestion.map(quizQuestion =>  quizQuestion.total)


    const data = [
        {
            name: 'React',
            marks: 4000,
            quiz: quizQ[0],
            amt: 2400,
        },
        {
            name: 'JS',
            marks: 3000,
            quiz: quizQ[1],
            amt: 2210,
        },
        {
            name: 'CSS',
            marks: quizQ[2],
            quiz: 8,
            amt: 2290,
        },
        {
            name: 'Git',
            marks: 2780,
            quiz: quizQ[3],
            amt: 2000,
        }];
    return (
        <div className='flex justify-center mt-10'>
            <LineChart width={500} height={400} data={data}>
                <Line type="monotone" dataKey="quiz" stroke="#FECC81" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </LineChart>
        </div>
    );
};

export default Statistics;