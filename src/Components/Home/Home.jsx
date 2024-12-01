import Layout from '../Layout/Layout';
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// Import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import About from '../About/About';
import Chef from '../Chefs/Chef';
import Services from '../../Services/Services';
import Menu from '../Menu/Menu';
import Reservation from '../../Reservation/Reservation';
import Testimony from '../Testimony/Testimony';
import Blog from '../Blog/Blog';

const Home = () => {
    const slides = [
        {
            image: 'https://themewagon.github.io/eatery/images/slider-image1.jpg',
            heading: 'Discover Delicious Dishes',
            description: 'Experience the taste of authentic cuisine crafted with passion and precision.',
        },
        {
            image: 'https://themewagon.github.io/eatery/images/slider-image2.jpg',
            heading: 'Fine Dining Experience',
            description: 'Indulge in a luxurious atmosphere with a menu that satisfies every palate.',
        },
        {
            image: 'https://themewagon.github.io/eatery/images/slider-image3.jpg',
            heading: 'Exquisite Culinary Journey',
            description: 'Embark on a gastronomic adventure like no other at our restaurant.',
        },
    ];

    return (
        <Layout>
            <div className="h-screen cursor-e-resize">
                <Swiper
                    direction={'horizontal'}
                    pagination={{
                        clickable: true,
                    }}
                    loop={true}
                    autoplay={{
                        delay: 6000,
                        disableOnInteraction: false,
                    }}
                    effect="fade"
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="h-screen w-full relative">
                                {/* Background Image */}
                                <img
                                    src={slide.image}
                                    alt={`Slide ${index + 1}`}
                                    className="h-full w-full object-cover transition-all duration-1000"
                                />
                                {/* Overlay Content */}
                                <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-t from-black/60 via-black/40 to-transparent flex flex-col justify-center items-start px-6 md:px-16 text-white">
                                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                                        {slide.heading}
                                    </h1>
                                    <p className="text-base sm:text-lg md:text-xl mb-6">
                                        {slide.description}
                                    </p>
                                    <button className="w-fit px-4 py-2 sm:px-6 sm:py-3 bg-[#b18446] hover:bg-[#946b36] text-white font-semibold rounded transition-all">
                                        Explore More
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* about components here */}
            <About />
            {/* chef components here */}
            <Chef />
            {/* services components here */}
            <Services />
            {/* Menu components here */}
            <Menu />
            {/* Reservation  components here */}
            <Reservation />
            {/* Testimony  components here */}
            <Testimony />
            {/* Blog  components here */}
            <Blog />
        </Layout>
    );
};

export default Home;
