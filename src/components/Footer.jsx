import { Link } from 'react-router';
import {
    Facebook,
    Instagram,
    Mail,

} from 'lucide-react';
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {


    return (

        <footer className="bg-base-300 py-8 px-4 text-base-content">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div>

                    <div className="flex items-center space-x-2">
                        <span className="text-xl font-bold">TravelEase</span>
                    </div>
                    <ul className="space-y-2 mt-4">

                        <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
                        <li><Link to="/" className="hover:text-primary transition-colors">All Vehicles</Link></li>
                        <li><Link to="/" className="hover:text-primary transition-colors">Add Vehicle</Link></li>
                        <li><Link to="/" className="hover:text-primary transition-colors">Login</Link></li>
                    </ul>
                </div>

                <div>

                    <h3 className="text-lg font-bold mb-4">Resources</h3>
                    <ul className="space-y-2">
                        <li><Link to="/" className="hover:text-primary transition-colors">My Vehicles Blog</Link></li>
                        <li><Link to="/" className="hover:text-primary transition-colors">My Bookings</Link></li>
                        <li><Link to="/" className="hover:text-primary transition-colors">Poly Tips</Link></li>
                        <li><Link to="/" className="hover:text-primary transition-colors">Register</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-bold mb-4">Community</h3>
                    <ul className="space-y-2">
                        <li><Link to="/" className="hover:text-primary transition-colors">Discussion Forums</Link></li>
                        <li><Link to="/" className="hover:text-primary transition-colors">Study Groups</Link></li>
                        <li><Link to="/" className="hover:text-primary transition-colors">Events & Workshops</Link></li>
                        <li><Link to="/" className="hover:text-primary transition-colors">Leaderboard</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
                    <div className="flex space-x-4 mb-4">

                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                            <Facebook size={24} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                            <FaXTwitter size={24} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                            <Instagram size={24} />
                        </a>
                    </div>
                    <div>
                        <a
                            href="mailto:support@travelEase.com"
                            className="flex items-center hover:text-primary transition-colors"
                        >
                            <Mail size={18} className="mr-2" /> support@travelEase.com
                        </a>
                    </div>
                </div>
            </div>


            <div className="border-t lg:mb-0 md:mb-0 mb-0 border-base-200 mt-8 pt-4 text-center">

                <p className="text-sm">
                    TravelEase – Vehicle Booking & Trip Management Platform
                </p>
            </div>
        </footer>
    );
};

export default Footer;