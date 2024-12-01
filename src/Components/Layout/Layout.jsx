import React, { useState, useEffect } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';
import { RiMenu3Fill } from 'react-icons/ri';
import { RxCross2 } from 'react-icons/rx';
import { Link } from 'react-scroll'; // For smooth scrolling

const Layout = ({ children }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false); // For scroll to top visibility

    const insta = [
        { img: '/img/insta-1.jpg.webp' },
        { img: '/img/insta-2.jpg.webp' },
        { img: '/img/insta-3.jpg.webp' },
        { img: '/img/insta-4.jpg.webp' },
        { img: '/img/insta-5.jpg.webp' },
        { img: '/img/insta-6.jpg.webp' }
    ];

    // Disable/Enable scroll behavior based on mobile menu state
    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';
    }, [isMobileMenuOpen]);

    // Scroll to top visibility
    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div>
            {/* Navbar */}
            <nav className="flex items-center justify-between px-4 md:px-16 h-16 bg-[#000000f3]">
                <h2 className="text-xl md:text-2xl font-bold text-[#b18446]">Cozy Nook</h2>

                {/* Hamburger menu for mobile */}
                <button
                    className="block text-4xl md:hidden text-[#b18446]"
                    onClick={toggleMobileMenu}
                >
                    <RiMenu3Fill />
                </button>

                {/* Link items in mobile view */}
                <div
                    className={`absolute z-[9999] top-0 left-0 h-full w-full bg-black bg-opacity-80 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'block' : 'hidden'}`}
                >
                    {/* Close button */}
                    <div className="absolute top-6 right-6 text-3xl text-white">
                        <button onClick={toggleMobileMenu}>
                            <RxCross2 />
                        </button>
                    </div>

                    {/* Mobile Menu Links */}
                    <div className="flex flex-col items-center justify-center h-full text-white gap-6 px-4">
                        <Link
                            to="home"
                            smooth={true}
                            className="py-3 text-2xl font-semibold hover:text-[#b18446] transition-all duration-300"
                            onClick={toggleMobileMenu}
                        >
                            Home
                        </Link>
                        <Link
                            to="about"
                            smooth={true}
                            className="py-3 text-2xl font-semibold hover:text-[#b18446] transition-all duration-300"
                            onClick={toggleMobileMenu}
                        >
                            About
                        </Link>
                        <Link
                            to="menu"
                            smooth={true}
                            className="py-3 text-2xl font-semibold hover:text-[#b18446] transition-all duration-300"
                            onClick={toggleMobileMenu}
                        >
                            Menu
                        </Link>
                        <Link
                            to="blog"
                            smooth={true}
                            className="py-3 text-2xl font-semibold hover:text-[#b18446] transition-all duration-300"
                            onClick={toggleMobileMenu}
                        >
                            Blog
                        </Link>
                    </div>
                </div>

                {/* Links for desktop */}
                <div className="hidden md:flex gap-10 items-center text-white">
                    <Link to="home" smooth={true} className="py-2 cursor-pointer">
                        Home
                    </Link>
                    <Link to="about" smooth={true} duration={500} className="py-2 cursor-pointer hover:text-[#b18446] transition-all">
                        About
                    </Link>
                    <Link to="menu" smooth={true} duration={500} className="py-2 cursor-pointer hover:text-[#b18446] transition-all">
                        Menu
                    </Link>
                    <Link to="blog" smooth={true} duration={500} className="py-2 cursor-pointer hover:text-[#b18446] transition-all">
                        Blog
                    </Link>
                </div>
            </nav>

            {/* Main Content */}
            <div>{children}</div>

            {/* Scroll to Top Button */}
            {isVisible && (
                <div
                    onClick={scrollToTop}
                    className="mr-16 h-14 w-14 flex items-center justify-center rounded-full fixed cursor-pointer border border-[#b18446] text-[#b18446] z-[999] bottom-10 -right-10 md:right-2"
                >
                    <MdOutlineKeyboardArrowUp className="text-4xl " />
                </div>
            )}

            {/* Footer */}
            <footer className="pt-14 pb-4 w-full bg-[#141313] space-y-10">
                <div className="place-items-center max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-4 sm:px-8 md:px-16">
                    {/* Column 1 */}
                    <div className="flex flex-col items-center text-center">
                        <h2 className="text-xl font-bold text-white">Cozy Nook</h2>
                        <p className="text-gray-400 mt-4">
                            Far far away, behind the word mountains, far from the countries
                            Vokalia and Consonantia, there live the blind texts.
                        </p>
                        <div className="flex gap-3 mt-4 justify-center">
                            <a href="#" className="w-8 h-8 bg-[#C8A97E] rounded-full flex items-center justify-center">
                                <FaFacebook className="text-white" />
                            </a>
                            <a href="#" className="w-8 h-8 bg-[#C8A97E] rounded-full flex items-center justify-center">
                                <FaLinkedin className="text-white" />
                            </a>
                            <a href="#" className="w-8 h-8 bg-[#C8A97E] rounded-full flex items-center justify-center">
                                <FaInstagram className="text-white" />
                            </a>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col items-center text-center">
                        <h2 className="text-xl text-white font-bold">Open Hours</h2>
                        <ul className="mt-4 text-gray-400 space-y-2">
                            {[{ day: 'Monday', hours: '9:00 - 24:00' }, { day: 'Sunday', hours: '9:00 - 02:00' }].map(({ day, hours }) => (
                                <li key={day} className="flex justify-between">
                                    <span>{day}</span>
                                    <span>{hours}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div className="flex flex-col items-center text-center">
                        <h2 className="text-xl text-white font-bold">Instagram</h2>
                        <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-4">
                            {insta.map((item, index) => (
                                <img key={index} src={item.img} alt={`img${index + 1}`} className="w-full h-20 object-cover" />
                            ))}
                        </div>
                    </div>

                    {/* Column 4 */}
                    <div className="flex flex-col items-center text-center">
                        <h2 className="text-xl text-white font-bold">Newsletter</h2>
                        <p className="text-gray-400 mt-4">
                            Far far away, behind the word mountains, far from the countries.
                        </p>
                        <div className="mt-4 w-full sm:w-3/4 md:w-full">
                            <input
                                type="email"
                                placeholder="Enter email address"
                                className="w-full px-4 py-2  bg-gray-700 text-white placeholder-gray-400"
                            />
                            <button className="w-full bg-[#C8A97E] text-white py-2  mt-2">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                <div className="text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Cozy Nook. All Rights Reserved.
                </div>
            </footer>
        </div>
    );
};

export default Layout;
