import React from 'react'
import { MdOutlineMessage } from 'react-icons/md'

const Blog = () => {
    const blog = [
        {
            img: '/img/image_1.jpg.webp',
            label: 'Sept. 06, 2019 Admin',
            title: 'Taste the delicious foods in Asia',
            small: 'Read more',
            icon: <MdOutlineMessage />,
            comment: 3
        },
        {
            img: '/img/image_2.jpg.webp',
            label: 'Sept. 06, 2019 Admin',
            title: 'Taste the delicious foods in Asia',
            small: 'Read more',
            icon: <MdOutlineMessage />,
            comment: 3
        },
        {
            img: '/img/image_3.jpg.webp',
            label: 'Sept. 06, 2019 Admin',
            title: 'Taste the delicious foods in Asia',
            small: 'Read more',
            icon: <MdOutlineMessage />,
            comment: 3
        }
    ];

    return (
        <>
            <div className='px-4 md:px-8 pb-10 mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16'>
                {blog.map((post, index) => (
                    <div key={index} className='w-[90vw] md:w-[30vw] lg:w-[30vw] h-[65vh] shadow-lg'>
                        <div className='h-4/6 bg-black'>
                            <img src={post.img} alt={post.title} className="w-full h-full object-cover" />
                        </div>
                        <div className='px-4 pt-8'>
                            <span className='text-gray-400'>{post.label}</span>
                            <h2 className='text-2xl font-semibold'>{post.title}</h2>
                            <div className='flex items-center justify-between flex-wrap'>
                                <h2 className='text-gray-400 cursor-pointer truncate'>{post.small}</h2>
                                <div className='flex gap-2 items-center'>
                                    <span className='text-gray-400'>{post.icon}</span>
                                    <h3 className='text-gray-400 truncate'>{post.comment}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </>
    )
}

export default Blog
