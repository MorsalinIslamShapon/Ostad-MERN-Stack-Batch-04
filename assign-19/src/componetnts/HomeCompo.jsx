import React from 'react';

const HomeCompo = () => {
    return (
        <div className='md:flex-none lg:flex text-center items-center justify-around p-5  custom-bg'>
           <div className='lg:w-6/12'> <img src="/images/home-page-cover.jpg" className='md:h-96' alt="" /></div>
           <div className=''>
            <h1 className='font-bold text-7xl italic font-serif text-[#2e1065] my-5'>Pemons</h1>
            <button className="btn btn-error btn-block my-5"> Shop Now</button>
            <h3 className='font-semibold italic text-2xl my-5'>We are Selling best Product</h3>

           </div>
        </div>
    );
};

export default HomeCompo;