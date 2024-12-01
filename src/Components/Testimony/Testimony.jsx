import React from 'react';

const Testimony = () => {
    // Testimonial data
    const testimonies = [
        {
            name: 'John Doe',
            testimonial: 'The service was excellent! I couldn\'t be happier with the experience.',
            image: '/img/person_1.jpg.webp', // Corrected image path
        },
        {
            name: 'Jane Smith',
            testimonial: 'A truly wonderful experience. Highly recommend to everyone!',
            image: '/img/testimony1.webp', // Corrected image path
        },
        {
            name: 'Alex Brown',
            testimonial: 'The ambiance and service were just perfect. Loved it!',
            image: '/img/person_3.jpg.webp', // Corrected image path
        },
        {
            name: 'Emily Davis',
            testimonial: 'Such a pleasant experience. Will definitely be back.',
            image: '/img/person_4.jpg.webp', // Corrected image path
        },
        // Add more testimonials here
    ];

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-16">
        {/* Header Section */}
        <div className="pb-8 text-center">
            <h1 className="font-great-vibes text-6xl md:text-6xl  text-[#C8A97E] font-bold">
                Testimony
            </h1>
            <h2 className="text-2xl sm:text-4xl font-bold">Happy Customer</h2>
        </div>
    
        {/* Testimonial Section */}
        <div className="w-full overflow-hidden">
            {/* Scroll Wrapper */}
            <div className="flex animate-scroll hover:animate-none">
                {/* Render testimonies twice for infinite scroll */}
                {testimonies.concat(testimonies).map((testimony, index) => (
                    <div key={index} className="flex-shrink-0 w-[250px] sm:w-[300px] h-auto mx-4 sm:mx-6 bg-white rounded-lg p-4 shadow-lg mb-6 sm:mb-0">
                        <img
                            src={testimony.image}
                            alt={testimony.name}
                            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mb-4 object-cover mx-auto"
                        />
                        <h3 className="text-lg sm:text-xl font-semibold text-center">{testimony.name}</h3>
                        <p className="text-sm sm:text-base text-gray-600 italic text-center">{testimony.testimonial}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
    
    );
};

export default Testimony;
