import React from 'react';

const Reservation = () => {
    return (
        <section
            className="px-4 sm:px-16 py-12 sm:py-20 h-auto sm:h-screen bg-cover bg-center bg-fixed"
            style={{ backgroundImage: "url('/img/bg_3.jpg.webp')" }}
        >
            <div className="h-full">
                <div className="bg-white shadow-lg p-8 sm:h-[40vw] sm:w-[40vw] w-full sm:ml-16">
                    <div className="md:-space-y-7 -space-y-5 text-center mb-8">
                        <h1 className="font-great-vibes text-4xl sm:text-6xl text-[#C8A97E] font-bold">
                            Book a table
                        </h1>
                        <h2 className="text-2xl sm:text-4xl font-bold">Make Reservation</h2>
                    </div>
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="border  px-4 py-2 w-full"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="border  px-4 py-2 w-full"
                            />
                            <input
                                type="text"
                                placeholder="Phone"
                                className="border  px-4 py-2 w-full"
                            />
                            <input
                                type="date"
                                placeholder="Date"
                                className="border  px-4 py-2 w-full"
                            />
                            <input
                                type="time"
                                placeholder="Time"
                                className="border  px-4 py-2 w-full"
                            />
                            <select className="border  px-4 py-2 w-full">
                                <option value="">Person</option>
                                <option value="1">1 Person</option>
                                <option value="2">2 Persons</option>
                                <option value="3">3 Persons</option>
                                <option value="4">4+ Persons</option>
                            </select>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-[#C8A97E] text-white py-3  font-semibold"
                        >
                            Make a Reservation
                        </button>
                    </form>
                </div>
            </div>
        </section>

    );
};

export default Reservation;
