import Title from '@/components/Title';
import React from 'react';

const TutorialsPage = async({params}) => {
    const {slag}=await params;
    console.log(slag);
    const [technology, topic, , page_no , subject]=slag || [];
    return (
        <div>
            <Title>{technology} Tutorials</Title>
            <h2>{topic}</h2>
            <div className='flex justify-between'>
                <h2 className='font-bold'>{subject}</h2>
                <p>Page No: {page_no}</p>
            </div>
        </div>
    );
};

export default TutorialsPage;