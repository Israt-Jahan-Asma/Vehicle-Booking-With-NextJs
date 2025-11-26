
"use client";

import Link from "next/link";
import Image from "next/image"; 
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";
import { Menu, LogOut, ChevronDown } from "lucide-react"; 

export default function Header() {
    const router = useRouter();
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = async () => {
        try {
            await logOut();
            Swal.fire({
                icon: "success",
                title: "Logged out successfully",
                timer: 1500,
                showConfirmButton: false,
            });
            router.push("/login");
        } catch (err) {
            Swal.fire({
                icon: "error",
                title: "Logout failed",
            });
        }
    };

    const navLinks = (
        <>
            <li><Link href="/" className="px-3 py-2 text-gray-700 hover:text-blue-600 transition duration-150">Home</Link></li>
            <li><Link href="/all-vehicles" className="px-3 py-2 text-gray-700 hover:text-blue-600 transition duration-150">All Vehicles</Link></li>
            <li><Link href="/add-vehicles" className="px-3 py-2 text-gray-700 hover:text-blue-600 transition duration-150">Add Vehicle</Link></li>
            <li><Link href="/my-vehicles" className="px-3 py-2 text-gray-700 hover:text-blue-600 transition duration-150">My Vehicles</Link></li>
            <li><Link href="/my-bookings" className="px-3 py-2 text-gray-700 hover:text-blue-600 transition duration-150">My Bookings</Link></li>
        </>
    );

    return (

        <header className="sticky top-0 z-30 bg-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

                {/* Left Section: Logo and Mobile Menu */}
                <div className="flex items-center space-x-4">

                    {/* Logo Image (Fixed size required by Next/Image) */}
                    <Link href="/">
                        <Image
                            src="https://i.postimg.cc/sfHWM3b5/Gemini_Generated_Image_uvqzqluvqzqluvqz_1_1.png"
                            alt="TravelEase Logo"
                            width={120} // Adjusted size for better fit
                            height={30}
                        />
                    </Link>

                    {/* Mobile Hamburger Menu (Hidden on large screens) */}
                    <div className="lg:hidden dropdown relative">
                        <label tabIndex={0} className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer">
                            <Menu className="w-6 h-6" />
                        </label>
                        <ul tabIndex={0} className="absolute left-0 mt-3 w-52 p-2 shadow-xl bg-white rounded-lg border border-gray-200 z-50">
                            {navLinks}
                        </ul>
                    </div>
                </div>

                {/* Center Section: Desktop Navigation */}
                <nav className="hidden lg:flex flex-grow justify-center">
                    <ul className="flex items-center space-x-2">
                        {navLinks}
                    </ul>
                </nav>

                {/* Right Section: Auth/User Actions */}
                <div className="flex items-center space-x-3">
                    {user ? (
                        // User Dropdown (Replaced DaisyUI dropdown with pure Tailwind)
                        <div className="relative group">
                            <label tabIndex={0} className="flex items-center p-1 rounded-full bg-gray-50 hover:bg-gray-100 cursor-pointer transition">
                                <Image
                                    src={user?.photoURL || "https://i.postimg.cc/W3YZkWYg/default-avatar.png"}
                                    alt="User Avatar"
                                    width={32}
                                    height={32}
                                    className="rounded-full mr-2 object-cover"
                                />
                                <span className="text-sm font-medium text-gray-700 hidden md:inline">{user?.displayName?.split(' ')[0] || "User"}</span>
                                <ChevronDown className="w-4 h-4 ml-1 text-gray-500" />
                            </label>

                            {/* Dropdown Content */}
                            <ul tabIndex={0} className="absolute right-0 mt-3 w-52 p-2 shadow-xl bg-white rounded-lg border border-gray-200 hidden group-hover:block z-50 transition duration-200 origin-top-right">
                                <li>
                                    <span className="block px-4 py-2 text-sm text-gray-800 font-semibold border-b border-gray-100">
                                        {user?.email}
                                    </span>
                                </li>
                                {/* Placeholder routes for Add/Manage product that were in DaisyUI dropdown */}
                                <li><Link href="/add-vehicles" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-md">Add Vehicle</Link></li>
                                <li><Link href="/my-vehicles" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-md">My Vehicles</Link></li>
                                <li>
                                    <button onClick={handleLogout} className="w-full text-left flex items-center px-4 py-2 text-red-600 hover:bg-red-50 rounded-md mt-1 border-t border-gray-100">
                                        <LogOut className="w-4 h-4 mr-2" />
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        // Login/Register Buttons (Standard Tailwind buttons)
                        <>
                            <Link href="/login" className="px-4 py-2 text-blue-600 hover:text-blue-700 transition duration-150">Login</Link>
                            <Link href="/register" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg shadow-md transition duration-150">Register</Link>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}