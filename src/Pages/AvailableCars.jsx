import React from 'react';
import Card from '../Components/Card';

const AvailableCars = () => {
    return (
        <div className='w-[90vw] md:w[90vw] mx-auto space-y-10'>
            <div className='text-4xl font-bold'>Available Cars</div>
            <div className=" grid grid-cols-1 md:grid-cols-3 gap-3 ">
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
        </div>
    );
};

export default AvailableCars;