import React from 'react'
import Image from 'next/legacy/image'
import electronicsStore from '@/public/electronics store.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from 'next/link';
import { MdArrowRightAlt } from 'react-icons/md';

const Vendors = () => {
    const PrevArrow = (props) => {
        const { onClick } = props;
        return (
            <div className="slick-arrow slick-prev" onClick={onClick}>
                <style jsx>{`
              .slick-arrow.slick-prev:before {
                color: purple;
              }
            `}</style>
            </div>
        );
    };

    const NextArrow = (props) => {
        const { onClick } = props;
        return (
            <div className="slick-arrow slick-next" onClick={onClick}>
                <style jsx>{`
              .slick-arrow.slick-next:before {
                color: purple;
              }
            `}</style>
            </div>
        );
    };

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        centerMode: true,
        autoplay: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 1537,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2.5,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                    centerMode: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                }
            }
        ]
    };



    const VendorCard = () => (
        <>
            <div className='w-48 h-44 relative rounded-xl overflow-hidden'>
                <Image src={electronicsStore} alt='electronics store' layout='fill' objectFit='cover' objectPosition='center' />
                <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent flex flex-col justify-end text-white'>
                    <span className='px-2 text-sm'>Vendor Name</span>
                    <span className='px-2 mb-1 text-xs'>Vendor Address</span>
                </div>
            </div>
        </>
    )

    return (
        <>
            <div className="w-full pt-7 pb-10 mb-5 overflow-hidden text-slate-800 bg-white">
                <div className="container mx-auto ">
                    <div className='text-center mb-3'>
                        <a>Nearby Vendors</a>
                    </div>
                    <div >
                        <Slider {...settings}>
                            <VendorCard />
                            <VendorCard />
                            <VendorCard />
                            <VendorCard />
                            <VendorCard />
                            <VendorCard />
                            <VendorCard />
                            <VendorCard />
                            <VendorCard />
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Vendors
