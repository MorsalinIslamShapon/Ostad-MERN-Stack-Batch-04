import React from 'react';
import { NavLink } from 'react-router-dom';
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';
import Component4 from './Component4';

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <NavLink to="/home">Active Page</NavLink>
      <Component1 />
      <Component2 />
      <Component3 />
      <Component4 />
    </div>
  );
}

export default Home;
