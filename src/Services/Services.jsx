import React from 'react'

const Services = () => {
    const services = [
        {
            icon: '/img/cake.png',
            title: 'Birthday Party',
            para: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.'
        },
        {
            icon: '/img/meeting.png',
            title: 'Business Meetings',
            para: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.'
        },
        {
            icon: '/img/tray.png',
            title: 'Wedding Party',
            para: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.'
        }
    ];

    return (
        <div>
            <div className="px-4 sm:px-16  bg-[#FAFAFA]">
                <div className='md:-space-y-9 -space-y-6 pt-16 text-center'>
                    <h1 className='font-great-vibes text-[#C8A97E] text-6xl sm:text-8xl font-bold'>Services</h1>
                    <h1 className='text-3xl sm:text-5xl font-bold'>Catering Services</h1>
                </div>

                <div className='pt-16 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16'>
                    {
                        services.map((item, index) => (
                            <div key={index} className='space-y-4 flex flex-col items-center justify-center h-auto sm:h-[25vw] w-[70vw] sm:w-[25vw]'>
                                <img
                                    className='h-12 sm:h-16 fill-red-500'
                                    src={item.icon}
                                    alt={item.title}
                                />
                                <label className='font-bold text-xl sm:text-2xl'>{item.title}</label>
                                <small className='text-center text-base sm:text-[18px] text-gray-400'>{item.para}</small>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>

    )
}

export default Services
