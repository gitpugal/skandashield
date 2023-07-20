import React from 'react'
import Carousel from 'better-react-carousel'

const CustomCarousel = (props) => {
    return (
        <div className='bg-blue-700 text-xl overflow-hidden h-fit relative mb-10  w-screen'>
            <h1 className='text-blue-400 w-fit mx-auto text-5xl font-bold pt-8'>
                {props.title || ""}
            </h1>
            <div className='py-14 mx-5'>
                <Carousel className='bg-red-400 mt-10' cols={3} rows={1} gap={100} loop={true} autoPlay={1000}>
                    <Carousel.Item>
                        <img className='rounded-2xl' width="100%" src="https://picsum.photos/800/600?random=1" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className='rounded-2xl' width="100%" src="https://picsum.photos/800/600?random=2" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className='rounded-2xl' width="100%" src="https://picsum.photos/800/600?random=3" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className='rounded-2xl' width="100%" src="https://picsum.photos/800/600?random=1" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className='rounded-2xl' width="100%" src="https://picsum.photos/800/600?random=2" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className='rounded-2xl' width="100%" src="https://picsum.photos/800/600?random=3" />
                    </Carousel.Item>
                </Carousel>
            </div>
            <p className='text-center mb-16 text-white w-full md:w-1/2 mx-auto'>
                Global Enterprises and Fortune 500 companies trust CloudSEKto fortify their cybersecurity posture. Read all our Customer Stories
            </p>
        </div>
    )
}

export default CustomCarousel