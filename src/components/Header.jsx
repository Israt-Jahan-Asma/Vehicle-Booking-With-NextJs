import React, { use, useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import Swal from 'sweetalert2';

const Header = () => {
    const { user, logOut } = use(AuthContext);
    const navigate = useNavigate();
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        const html = document.querySelector("html");
        html.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);


    const handleLogout = async () => {
        try {
            await logOut();
            Swal.fire({
                icon: "success",
                title: "Logged out successfully",
                timer: 1500,
                showConfirmButton: false,
            });
            navigate("/login");
        } catch (err) {
            console.error(err);
            Swal.fire({
                icon: "error",
                title: "Logout failed",
            });
        }
    };

    const handleTheme = (checked) => {
        setTheme(checked ? "dark" : "light");
    };

    const links = (
        <>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/all-vehicles'>All Vehicles</NavLink></li>
            <li><NavLink to='/add-vehicles'>Add Vehicle</NavLink></li>
            <li><NavLink to='/my-vehicles'>My Vehicles</NavLink></li>
            <li><NavLink to='/my-bookings'>My Bookings</NavLink></li>
        </>
    );

    return (
        <div className="bg-base-200 text-base-content shadow-md">
            <div className="container-default flex items-center justify-between pr-3 xl:pr-0">

                {/* Left: Logo + Mobile Dropdown */}
                <div className="flex items-center">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-base-content">
                            {links}
                        </ul>
                    </div>

                    <img className="w-50" src="https://i.postimg.cc/sfHWM3b5/Gemini_Generated_Image_uvqzqluvqzqluvqz_1_1.png" alt="Logo" />
                </div>

                {/* Center: Menu */}
                <ul className="hidden lg:flex menu menu-horizontal px-1 mx-auto text-base-content">
                    {links}
                </ul>

                {/* Right: Avatar / Login */}
                <div className="flex items-center gap-3">
                    <input
                        onChange={(e) => handleTheme(e.target.checked)}
                        type="checkbox"
                        defaultChecked={localStorage.getItem('theme') === "dark"}
                        className="toggle toggle-sm"
                    />

                    {user ? (

                        <div className="dropdown dropdown-end dropdown-hover">

                            {/* Avatar) */}
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user?.photoURL || "https://i.postimg.cc/W3YZkWYg/default-avatar.png"} alt="User" />
                                </div>
                            </label>

                            {/* Dropdown Content */}
                            <ul
                                tabIndex={0}
                                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 text-base-content -mt-1">
                                <li><a className="justify-between">{user?.displayName || "User"}</a></li>
                                <li><button onClick={handleLogout}>Logout</button></li>
                            </ul>
                        </div>
                    ) : (
                        <>
                            <NavLink className='btn btn-primary ml-2' to='/login'>Login</NavLink>
                            <NavLink className='btn btn-primary ml-2' to='/register'>Register</NavLink>
                        </>
                    )}


                </div>

            </div>
        </div>
    );
};

export default Header;