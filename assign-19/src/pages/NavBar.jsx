import { Link, NavLink } from "react-router-dom";
import Footer from "./Footer";
import navItems from '../utilites/navFun';



const NavBar = ({ children }) => {
  return (
    <>
      <div className="navbar bg-base-100 sticky top-0 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {
                navItems()
              }
            </ul>
          </div>
          <Link to={'/'}>
            <img src="https://pemonsbd.com/wp-content/uploads/2023/12/received_1183134525810580.webp" className="h-14" />
          </Link>




        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {
              navItems()
            }

          </ul>
        </div>
        <div className="navbar-end">
        <Link to='/Authentication'><button  className="px-3 py-2 mx-2 text-sm font-semibold text-white transition-colors duration-300 transform bg-black rounded-md hover:bg-gray-800">signUp</button></Link>
          <Link to='/Authentication'>
          <button className="px-3 py-1 text-sm font-semibold text-white transition-colors duration-300 transform border-2 rounded-md hover:bg-gray-700">signIn</button></Link>
        </div>

      </div>

      {children}
      <Footer />
    </>
  );
};

export default NavBar;
