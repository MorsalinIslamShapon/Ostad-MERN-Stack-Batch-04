import React from 'react';
import Subscribe from '../Components/Home/Subscribe';
import NavBar from './NavBar';
import Testimonial from '../Components/Testimonials/Testimonial';

const TestimonialsPage = () => {
    return (
        <NavBar>
            <div className=' p-16 '>
                <h1 className='text-xl font-bold'>Testimonial List</h1>
                <p className='font-semibold my-4'>{'Home  > '} <span className='text-green-400'>TestimonialList</span> </p>
            </div>
            <Testimonial/>
            <Subscribe/>
        </NavBar>
    );
};

export default TestimonialsPage;