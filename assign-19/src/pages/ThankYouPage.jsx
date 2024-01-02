import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import Button from '../componetnts/Button.JSx';

const ThankYouPage = () => {
  return (
      <div className="container mx-auto mt-8 text-center relative">
      <img src="https://uploads-ssl.webflow.com/611167e7889c927aebfd8ee2/641f3650697d56a21b2b1840_Thank%20You%20Page.png"  className="w-full" />
      <div className='absolute md:bottom-10  md:left-48 align-center font-bold text-3xl text-[#205969]'>
        <p className="text-lg mb-5">
        Your order has been successfully placed. We appreciate your business! <br />
        An email confirmation has been sent to the provided email address. <br />
        If you have any questions or need further assistance, please <span><Link to="/contacts" className='text-blue-600'  >contact our customer support</Link></span>.
      </p>
    </div>
      <p className='text-blue-500'><Button/></p>
    </div>
  
  );
};

export default ThankYouPage;
