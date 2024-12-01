import { div } from 'framer-motion/client';
import React from 'react'

const Menu = () => {
    const Menu = [
        {
            img: '/img/breakfast-1.jpg.webp',
            price: 29,
            name: 'Grilled Beef with potatoes',
            para: 'Meat, Potatoes, Rice, Tomatoe'
        },
        {
            img: '/img/breakfast-2.jpg.webp',
            price: 29,
            name: 'Grilled Beef with potatoes',
            para: 'Meat, Potatoes, Rice, Tomatoe'
        },
        {
            img: '/img/breakfast-3.jpg.webp',
            price: 29,
            name: 'Grilled Beef with potatoes',
            para: 'Meat, Potatoes, Rice, Tomatoe'
        },
        {
            img: '/img/breakfast-4.jpg.webp',
            price: 29,
            name: 'Grilled Beef with potatoes',
            para: 'Meat, Potatoes, Rice, Tomatoe'
        },
        {
            img: '/img/breakfast-5.jpg.webp',
            price: 29,
            name: 'Grilled Beef with potatoes',
            para: 'Meat, Potatoes, Rice, Tomatoe'
        },
        {
            img: '/img/breakfast-6.jpg.webp',
            price: 29,
            name: 'Grilled Beef with potatoes',
            para: 'Meat, Potatoes, Rice, Tomatoe'
        }
    ];
    return (
        < >
            <div id='menu' className='px-4 sm:px-16 min-h-screen bg-red-0'>
                <div className='md:-space-y-9 -space-y-6 md:pt-2 pt-16 text-center'>
                    <h1 className='font-great-vibes text-[#C8A97E] text-5xl sm:text-8xl font-bold'>Specialties</h1>
                    <h3 className='font-bold text-3xl sm:text-6xl'>Our Menu</h3>
                </div>
                <div className='mt-16 pb-10 h-full flex flex-wrap items-center justify-between bg-orange00'>
                    {
                        Menu.map((item, index) => (
                            <div key={index} className='h-auto w-full sm:w-1/2 flex flex-col sm:flex-row bg-green-0 mb-6 sm:mb-0'>
                                <div className='h-full w-full sm:w-1/2 bg-re-600'>
                                    <img src={item.img} alt="" className="w-full h-full object-cover" />
                                </div>
                                <div className='h-full w-full sm:w-1/2 flex flex-col justify-center p-5 bg-orange'>
                                    <div className='flex gap-4 sm:gap-10 bg-re500'>
                                        <label className='text-[16px] sm:text-[19px] font-semibold'>{item.name}</label>
                                        <span className='font-semibold text-[#C8A87F]'>${item.price}</span>
                                    </div>
                                    <small className='text-xl sm:text-3xl text-gray-700'>{item.para}</small>
                                    <button className='mt-4 px-6 py-3 bg-[#C8A87F] text-white w-fit font-semibold'>
                                        Order now
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </>
    )
}

export default Menu
