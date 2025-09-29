"use client";
import React from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import MainSection from "./MainSection";

const PrevArrow = ({ onClick }) => (
    <button
        onClick={onClick}
        className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 bg-black/60 backdrop-blur text-white p-2.5 md:p-3 rounded-full shadow-lg ring-1 ring-white/20 hover:bg-black/80 transition"
    >
        <FaChevronLeft size={18} />
    </button>
);

const NextArrow = ({ onClick }) => (
    <button
        onClick={onClick}
        className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 bg-black/60 backdrop-blur text-white p-2.5 md:p-3 rounded-full shadow-lg ring-1 ring-white/20 hover:bg-black/80 transition"
    >
        <FaChevronRight size={18} />
    </button>
);

const events = [
    {
        title: 'Rock n\' Dhol',
        subtitle: 'Dhyan Chand National Stadium',
        image: '/craousel1.webp',
    },
    {
        title: 'Sonu Nigam LIVE',
        subtitle: 'Get Ticket\nSaathiya',
        image: '/craousel2.webp',
    },
    {
        title: 'Great Garba Fest',
        subtitle: 'Oct5–6th Delhi',
        image: '/craousel1.webp',
    },
];

const Homepage = () => {
    const mainSlider = {
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        autoplay: false,
        autoplaySpeed: 4000,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [{ breakpoint: 768, settings: { arrows: false } }],
    };



    return (
        <>
            <div className="relative w-[95%] mx-auto mt-6">
                <Slider {...mainSlider}>
                    {events.map((event, idx) => (
                        <div key={idx} className="relative group">
                            <img
                                src={event.image}
                                alt={event.title}
                                className="rounded-2xl w-full h-[220px] sm:h-[320px] lg:h-[420px] object-cover shadow-xl transition-transform duration-700 group-hover:scale-[1.01]"
                            />
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                            <div className="absolute inset-x-4 sm:inset-x-8 bottom-6 flex flex-col gap-2 text-white">
                                <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium uppercase tracking-wider text-white/80">
                                    Trending Event
                                </span>
                                <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold leading-tight drop-shadow">
                                    {event.title}
                                </h2>
                                <p className="text-xs sm:text-sm text-white/80 whitespace-pre-line max-w-xl">
                                    {event.subtitle}
                                </p>
                                <div className="mt-2">
                                    <Link
                                        href="#book"
                                        className="inline-flex items-center gap-2 bg-white text-gray-900 hover:bg-gray-100 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold shadow-md transition"
                                    >
                                        Book now <FaArrowRight className="text-xs" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>


            <div className="max-w-7xl mx-auto px-4 py-10">
                <div className="flex items-end justify-between mb-4">
                    <div>
                        <h3 className="text-2xl font-bold tracking-tight">Happening near you</h3>
                        <p className="text-sm text-gray-500">Discover concerts, comedy, and cultural events</p>
                    </div>
                    <Link href="#explore" className="text-sm text-red-500 hover:text-red-600 inline-flex items-center gap-1 font-medium">
                        explore all <FaArrowRight className="text-xs" />
                    </Link>
                </div>
                <div className="flex gap-4 scrollbar-hide pb-2">
                    {events.map((event, idx) => (
                        <div
                            key={idx}
                            className="min-w-[260px] flex-shrink-0 bg-white rounded-xl shadow-sm border border-gray-100 p-3 flex items-center gap-3 hover:shadow-md hover:-translate-y-0.5 transition"
                        >
                            <Image
                                src={event.image}
                                alt={event.title}
                                width={150}
                                height={150}
                                className="rounded-lg object-cover ring-1 ring-gray-100"
                            />
                            <div className="flex-1">
                                <h3 className="font-semibold text-base text-gray-900 line-clamp-1">{event.title}</h3>
                                <p className="text-sm text-gray-500 whitespace-pre-line line-clamp-2">
                                    {event.subtitle}
                                </p>
                            </div>
                            <FaArrowRight className="text-gray-300 group-hover:text-gray-400 transition" />
                        </div>
                    ))}
                </div>

                <div className="mt-12 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Image src="/platinum-icon.webp" alt="platinum" width={50} height={50} />
                        <h2 className="text-xl font-extrabold tracking-wide">PLATINUM ARTISTS</h2>
                    </div>
                    <Link href="/artists" className="text-red-500 hover:text-red-600 flex items-center gap-1 font-medium">
                        see all <FaArrowRight className="text-xs" />
                    </Link>
                </div>
            </div>
            <MainSection/>

        </>
    );
};

export default Homepage;
