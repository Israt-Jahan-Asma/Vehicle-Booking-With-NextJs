import React from 'react';
import { motion } from "framer-motion";

const Vehicles = ({ vehicles }) => {


    const { _id, vehicleName, owner, category, pricePerDay, location, availability, coverImage, description } = vehicles

    return (
        <motion.a
            href={`/vehiclesDetails/${_id}`}

            whileHover={{ boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)", borderColor: 'rgb(var(--primary))' }}
            className="group block bg-base-100 w-full border border-base-200 rounded-xl transition-ll duration-300 overflow-hidden shadow-xl"
        >
            <div className="flex flex-col h-full">

                <figure className=' flex justify-center items-center w-full '>
                    <img
                        className='max-h-full max-w-full object-contain'
                        src={coverImage}
                        alt={vehicleName}
                    />
                </figure>

                <div className="p-6 flex flex-col h-full">
                    <div className="text-left">

                        <p className="text-sm font-semibold uppercase text-primary mb-1">
                            {category}
                        </p>
                        {/* Vehicle Name */}
                        <h2 className="text-xl font-bold text-base-content mb-4 group-hover:text-primary transition-colors duration-300">
                            {vehicleName}
                        </h2>
                        <p>
                            {description}
                        </p>
                    </div>


                    <div className="flex justify-between items-center pt-4">

                        {/* Price */}
                        <p className='text-xl font-extrabold'>
                            <span className='text-base-content'>${pricePerDay}</span>
                            <span className='font-normal text-sm text-base-content/70'> / Day</span>
                        </p>


                        <button className="btn btn-primary btn-circle btn-sm shadow-md">
                            {/* Right Arrow Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
                                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </motion.a>
    );
};

export default Vehicles;