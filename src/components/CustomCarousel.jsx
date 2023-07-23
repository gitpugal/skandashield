import React from 'react'
import Carousel from 'better-react-carousel'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomCarousel = (props) => {
    const companies = ["Google", "Facebook", "Microsoft", "EY", "ZOHO", "Amazon"];
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='bg-blue-700 text-xl overflow-hidden h-fit relative mb-10  w-screen'>
            <h1 className='text-blue-400 w-fit mx-auto text-5xl font-bold pt-8'>
                {props.title || ""}
            </h1>
            <div className='py-14 mx-10'>
                <Slider {...settings} className='w-[95%] mx-auto'>
                    {
                        companies.map((company) => (
                            <div className='h-20 flex w-1/2 bg-opacity-30 text-center rounded-2xl'>
                                <div className='w-1/3 h-full  justify-center items-center text-center flex px-4 bg-white bg-opacity-25 rounded-2xl mx-auto'>
                                    <p className='text-white  font-bold text-xl'>{company}</p>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
            <p className='text-center mb-16 text-white w-full md:w-1/2 mx-auto px-3'>
                Global Enterprises and Fortune 500 companies trust CloudSEKto fortify their cybersecurity posture. Read all our Customer Stories
            </p>
        </div>
    )
}

export default CustomCarousel