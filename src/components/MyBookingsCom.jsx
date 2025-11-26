import React from 'react';
import { Link } from 'react-router';
import { motion } from "framer-motion";

const MyBookingsCom = ({ booking }) => {
    // Destructuring fields from the booking prop
    const { _id, vehicleName, owner, category, pricePerDay, location, availability, coverImage, userEmail, description } = booking

    return (
       
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="card bg-base-100 shadow-md transition-shadow duration-300 h-full flex flex-col"
        >
            <figure className='flex-shrink-0'>
                
                <img
                    className='h-64 object-cover w-full'
                    src={coverImage}
                    alt={vehicleName}
                />
            </figure>
            <div className="card-body flex-grow text-base-content">
                <h2 className="card-title text-base-content">{vehicleName}</h2>
               
                <p className='text-base-content'>{description} </p>
                <div className="card-actions justify-between items-center mt-auto">
                    
                    <p>Price per day: <span className='font-extrabold text-primary'>${pricePerDay}</span></p>
                    <Link to={`/my-bookings/${_id}`} className="btn btn-primary">View Details</Link>
                </div>
            </div>
        </motion.div>
    );
};

export default MyBookingsCom;