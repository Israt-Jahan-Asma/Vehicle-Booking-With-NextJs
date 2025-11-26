import React from "react";

const FeaturedOwner = () => {
    return (

        <section className="bg-base-200 text-base-content py-16">

            <div className="flex flex-col-reverse md:flex-row md:items-stretch md:gap-0 w-full">

                <div className="md:w-1/2 flex flex-col justify-center w-full">
                    <div className="p-8 md:p-16 max-w-7xl mx-auto">
                        <div className="max-w-md text-left">
                            <h4 className="text-primary text-sm font-semibold uppercase mb-2">
                                BEST OWNERS
                            </h4>

                            <h2 className="text-4xl md:text-5xl font-extrabold text-base-content leading-tight mb-6">
                                We Care About Your Comfort And Safety
                            </h2>

                            <p className="mb-8 text-base-content/80 text-lg">
                                Meet <span className="font-semibold text-accent">Israt & Alex</span>, our top-rated host with 200+ successful rentals and 5-star reviews. Their dedication to quality and customer satisfaction ensures the best vehicles for your journey.
                            </p>

                            <button className="btn btn-primary border-2">
                                + VIEW MORE
                            </button>
                        </div>
                    </div>
                </div>


                <div className="md:w-1/2">
                    <img
                        src="https://plus.unsplash.com/premium_photo-1661344251398-4c3396156c89?q=80&w=1148&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Featured Owner"
                        className="w-full h-full object-cover min-h-[400px] md:min-h-[500px]"
                    />
                </div>
            </div>
        </section>
    );
};

export default FeaturedOwner;