import React from 'react';

const Information = () => {
    return (
        <div className='flex mx-auto h-screen max-w-[1240px] text-white'>
            <div className='grid justify-center items-center mx-auto max-h-[500px] w-full grid-cols-2'>
                <div className='flex justify-center'>
                    <div className='flex items-center justify-center rounded-full max-h-[300px] max-w-[300px] overflow-hidden'>
                        <img src={require('../../../images/profilepic.png')} alt='sand-dunes' width='500px' height="500px"/>
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <h1>Test Columns</h1>
                </div>
            </div>
        </div>
    );
}

export default Information;