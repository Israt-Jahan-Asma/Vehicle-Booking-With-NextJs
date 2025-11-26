import React from "react";
import { Link } from 'react-router';

const categories = [
    {
        id: 1,
        title: "SUVs",
        description: "Perfect for family adventures and rough terrain. High ground clearance and ample space.",
        image: 'https://images.unsplash.com/photo-1674110997072-41f11b7d4ae7?ixlib=rb-…'
    },
    {
        id: 2,
        title: "Electric",
        description: "Eco-friendly, silent, and modern driving. Ideal for city travel and sustainability.",
        image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8'
    },
    {
        id: 3,
        title: "Vans",
        description: "Maximum seating and cargo capacity. Great for large groups or equipment transport.",
        image: 'https://images.unsplash.com/photo-1674719645138-c3fd1aaf8307?ixlib=rb-…'
    },
    {
        id: 4,
        title: "Sedans",
        description: "Comfortable, stylish, and efficient. The classic choice for business and personal travel.",
        image: 'https://images.pexels.com/photos/627678/pexels-photo-627678.jpeg'
    },
];

const TopCategories = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container-default mx-auto px-2">
                
                <div className="max-w-xl mb-12 text-left">
                    <h4 className="text-primary text-lg font-semibold uppercase">Featured Vehicles</h4>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-base-content my-3">
                        Find Your Perfect Drive
                    </h2>
                    <p className="text-base-content/70">
                        Browse our curated selection of top-rated vehicles to find the ideal match for your next trip. From rugged SUVs to sleek electric cars, your journey starts here.
                    </p>
                </div>

                {/* Category Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((cat) => (
                        <Link
                            key={cat.id}
                            to={`/all-vehicles?category=${cat.title}`}

                            className="group relative w-full h-80 overflow-hidden rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-2xl"
                        >
                            {/* Category Image */}
                            <img
                                src={cat.image}
                                alt={cat.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />


                            <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/70 to-transparent z-10">

                                <div className="text-white">

                                    <p className="text-sm mb-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                                        {cat.description}
                                    </p>

                                    <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 text-sm font-medium">
                                        <span>View Collection</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-move-right">
                                            <path d="M18 8L22 12L18 16" /><path d="M2 12H22" />
                                        </svg>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-white mt-1 transition-transform duration-300 group-hover:-translate-y-1">
                                    {cat.title}
                                </h3>
                            </div>

                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TopCategories;