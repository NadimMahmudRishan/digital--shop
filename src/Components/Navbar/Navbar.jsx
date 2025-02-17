import { NavLink } from "react-router-dom";

const Navbar = () => {
  const link = (
    <>
      <li className="md:mx-7 md:text-lg duration-300 hover:scale-105  relative hover:-top-1 ">
        <NavLink to="/home">Home</NavLink>
      </li>
      <li className="md:mx-7 md:text-lg duration-300 hover:scale-105  hover:-top-1">
        <NavLink to="/shop">Shop</NavLink>
      </li>
      <li className="md:mx-7 md:text-lg  duration-300 hover:scale-105  hover:-top-1">
        <NavLink to="/about">About us</NavLink>
      </li>
      <li className="md:mx-7 md:text-lg duration-300 hover:scale-105 hover:-top-1">
        <NavLink to="/account">My Account</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-gradient-to-r from-blue-800 to-blue-500">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {link}
          </ul>
        </div>
        <NavLink
          className="text-white px-5 text-lg md:text-xl font-semibold"
          to="/"
        >
          Digital Shop
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white">{link}</ul>
      </div>
      <div className="navbar-end gap-1 md:gap-2">
        {/* Add to cart */}
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="badge badge-sm indicator-item">8</span>
          </div>
        </div>
        {/* Search bar */}
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 h-10 md:h-11 md:w-auto"
          />
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
