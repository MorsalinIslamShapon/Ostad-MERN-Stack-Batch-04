import React from 'react';
import { NavLink } from 'react-router-dom';
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';
import Component4 from './Component4';
const Contact = () => {
    return (
        <div>
             <h1>Contact Page</h1>
      <NavLink to="/home">Active Page</NavLink>
      <Component1 />
      <Component2 />
      <Component3 />
      <Component4 />
        </div>
    );
};

export default Contact;