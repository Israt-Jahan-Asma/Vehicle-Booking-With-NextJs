"use client"
import Link from 'next/link';
import Image from 'next/image';

export default function VehicleCard({ vehicle }) {

    if (!vehicle) {
        return null;
    }

    const {
        _id,
        vehicleName,          
        owner,
        category,
        pricePerDay,          
        location,
        availability,
        coverImage,     
        description
    } = vehicle;

    // Fallbacks for image and ID
    const cardId = _id ;
    const imageSrc = coverImage ;

    return (
        
        <Link
            href={`/all-vehicles/${cardId}`}
            className="group block bg-white w-full border border-gray-200 rounded-xl transition duration-300 overflow-hidden shadow-lg hover:shadow-2xl hover:border-blue-500"
        >
            <div className="flex flex-col h-full">

                {/* Image Container */}
                <figure className='relative h-64 w-full flex justify-center items-center overflow-hidden'>
                    <Image
                        className='object-cover transition duration-300 group-hover:scale-105'
                        src={imageSrc}
                        alt={vehicleName || 'Vehicle image'}
                        fill
                        sizes="(max-width: 768px) 100vw, 40vw"
                        style={{ objectFit: 'cover' }}
                    />
                </figure>

                <div className="p-6 flex flex-col h-full">
                    <div className="text-left flex-grow">

                        <p className="text-sm font-semibold uppercase text-blue-600 mb-1">
                            {category }
                        </p>

                        {/* Vehicle Name */}
                        <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300 truncate">
                            {vehicleName }
                        </h2>

                        {/* Description (Truncated) */}
                        <p className="text-sm text-gray-500 line-clamp-2 mb-4">
                            {description }
                        </p>
                    </div>


                    <div className="flex justify-between items-center pt-4 border-t border-gray-100 mt-2">

                        {/* Price */}
                        <p className='text-2xl font-extrabold'>
                            <span className='text-gray-900'>${pricePerDay }</span>
                            <span className='font-normal text-sm text-gray-500'> / Day</span>
                        </p>


                        {/* Arrow Button (Standard Tailwind Button styling) */}
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white shadow-md group-hover:bg-blue-700 transition duration-300">
                            {/* Right Arrow Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
                                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};