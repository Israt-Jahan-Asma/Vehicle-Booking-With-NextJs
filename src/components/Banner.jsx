import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from 'react-router'; 

const images = [
    'https://images.unsplash.com/photo-1674110997072-41f11b7d4ae7?ixlib=rb-…',
    'https://images.unsplash.com/photo-1494976388531-d1058494cdd8',
    'https://images.unsplash.com/photo-1674719645138-c3fd1aaf8307?ixlib=rb-…',
    'https://images.pexels.com/photos/627678/pexels-photo-627678.jpeg'
];

const Banner = () => {
    // Note: handleScroll is defined but not used. Keeping it for completeness.
    const handleScroll = () => {
        const section = document.getElementById("book-section");
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <div className="relative w-full h-[80vh] md:h-[100vh] overflow-hidden mb-7">
            <Swiper
                direction="vertical"
                pagination={{ clickable: true }}
                modules={[Pagination, Autoplay]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                className="mySwiper w-full h-full"
            >
                {images.map((src, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-full">
                            <img
                                src={src}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-full object-cover"
                            />

                            {/* Black overlay is good for contrast in both themes */}
                            <div className="absolute inset-0 bg-black/50"></div>

                            {/* Centered Text & Button */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                                <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg">
                                    Your Dream Vacation Awaits
                                </h1>
                                <p className="mt-3 text-sm md:text-lg opacity-90">
                                    Experience luxury, comfort, and nature — all in one place.
                                </p>
                                {/* This button uses the fixed custom class 'btn-primary' from the CSS */}
                                <Link to='/all-vehicles'
                                    className="mt-6 btn btn-primary"
                                >
                                    All Vehicles
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Banner;