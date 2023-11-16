import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from './Footer';

const NavBar = (props) => {
    const navItem = [
        { name: "Home", to: "/" },
        { name: "Team", to: "/team" },
        { name: "Service", to: "/service" },
        { name: "Project", to: "/project" },
        { name: "Testimonials", to: "/testimonials" }
    ];
    return (
       
        <>
            <div className="navbar bg-slate-50 fixed top-0 z-50 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                navItem.map((item) => { return (<li key={item.name} ><NavLink to={item.to}>{item.name}</NavLink></li>) })
                            }
                            <li></li>
                            <li></li>

                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Design<span className='text-orange-500'>AGENCY</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold">
                        {
                            navItem.map((item) => { return (<li key={item.name} ><NavLink to={item.to}>{item.name}</NavLink></li>) })
                        }

                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-outline btn-success mx-3">Login</button>
                    <button className="btn btn-success mx-2">Register</button>
                </div>
            </div>
            {props.children}
            <Footer/>
        </>

    )
};

export default NavBar;