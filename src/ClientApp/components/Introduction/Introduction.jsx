import React from 'react';
import Typed from 'react-typed';

const Introduction = () => {
    return (
        <div className='flex mx-auto h-[500px] max-w-[1240px] text-white'>
            <div className='flex mx-auto w-full justify-center items-center white'> 
                <div>
                    <h1 className='text-6xl font-bold p-2'>INNOVATION FOR THE FUTURE</h1>
                    <div className='flex justify-center'>
                        <h1 className='text-4xl py-4 pl-2'>Solutions that are</h1>
                        <Typed 
                            className='md:text-4xl sm:text-3xl text-xl font-bold text-[gray] md:pl-3 py-4'
                            strings={
                                [
                                    'Impactful',
                                    'Sustainable',
                                    'Eco-driven',
                                ]
                            }
                            typeSpeed={120}
                            backSpeed={140}
                            loop
                        />
                    </div>
                    <div className='flex justify-center'>
                        <button className='bg-[#329F5B] w-[200px] rounded-md font-medium mx-auto my-6 py-3 text-black'>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;