import React from "react";
import NumerCounter from "number-counter";
import { motion } from "framer-motion";

const Chef = () => {
    const chefs = [
        {
            name: "New Catherine",
            img: "/img/chef-image1.jpg",
            specialist: "Kitchen Officer",
            title: "Duis vel lacus id magna mattis vehicula",
        },
        {
            name: "Lindsay Perlen",
            img: "/img/chef-image2.jpg",
            specialist: "Owner & Manager",
            title: "Cras suscipit neque quis odio feugiat",
        },
        {
            name: "Isabella Grace",
            img: "/img/chef-image3.jpg",
            specialist: "Pizza Specialist",
            title: "Etiam auctor enim tristique faucibus",
        },
    ];


    return (
        <div className="px-8 sm:px-16 bg-[#FEFEFF]">
            {/* Section Header */}
            <div className="text-center">
                <h2 className="pt-24 text-3xl text-[#b18446] font-bold">Meet Our Chefs</h2>
                <p className="capitalize text-gray-400">They are nice & friendly</p>
            </div>

            {/* Chef Cards */}
            <div className="pt-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {chefs.map((chef, index) => (
                        <div
                            key={index}
                            className="group relative md:h-[40vw] md:w-full w-[82vw] cursor-pointer overflow-hidden shadow-md"
                        >
                            {/* Image */}
                            <img
                                src={chef.img}
                                alt={chef.name}
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-70 text-white flex flex-col items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                                <p className="text-center text-2xl font-bold mt-2">{chef.title}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Chef Details */}
                <div className="hidden md:flex flex-col sm:flex-row gap-10 sm:gap-[19vw] items-center justify-center pt-8">
                    {chefs.map((item, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <label className="font-bold text-2xl">{item.name}</label>
                            <span className="text-center text-gray-400">
                                {item.specialist}
                            </span>
                        </div>
                    ))}
                </div>


            </div>
        </div>

    );
};

export default Chef;
