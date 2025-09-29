'use client';
import React from 'react';
import Slider from "react-slick";
import Image from "next/image";

const ARTISTS = [
    { name: "Mohammad Aasif", role: "Gaming", image: "/alok-chauhan.webp" },
    { name: "Pawan Bansode", role: "Singer", image: "/men-avatar.webp" },
    { name: "Alok Chauhan", role: "Standup Comedy", image: "/alok-chauhan.webp" },
    { name: "Vinay Khatri", role: "Singer", image: "/men-avatar.webp" },
    { name: "Saurav Yadav", role: "Singer", image: "/alok-chauhan.webp" },
];

const categories = [
    { label: 'Standup Comedy', image: '/standup-comedy.webp' },
    { label: 'Poets', image: '/poets.webp' },
    { label: 'Anchors', image: '/anchors.webp' },
    { label: 'Actor / Model', image: '/standup-comedy.webp' },
    { label: 'Influencer', image: '/poets.webp' },
    { label: 'Singer', image: '/anchors.webp' },
    { label: 'Writer', image: '/standup-comedy.webp' },
    { label: 'Dancer', image: '/poets.webp' },
    { label: 'Speaker', image: '/speaker.webp' },
    { label: 'Food Vloggers', image: '/anchors.webp' },
    { label: 'Fitness & Health', image: '/standup-comedy.webp' },
    { label: 'Travel', image: '/poets.webp' },
];

const MainSection = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1280,
                settings: { slidesToShow: 3, slidesToScroll: 2, dots: true }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 2, slidesToScroll: 1 }
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1, slidesToScroll: 1 }
            }
        ]
    };

    return (
        <>
            <section className="max-w-7xl mx-auto px-4 py-10">
                <Slider {...settings}>
                    {ARTISTS.map((artist, index) => (
                        <div key={index} className="px-2">
                            <div className="bg-white rounded-2xl border border-gray-200 p-3 shadow hover:shadow-md transition">
                                <div className="w-full aspect-[3/4] overflow-hidden rounded-xl relative">
                                    <Image
                                        src={artist.image}
                                        alt={artist.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="pt-3 text-center">
                                    <p className="text-base font-semibold text-gray-800">{artist.name}</p>
                                    <p className="text-sm text-gray-500">{artist.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </section>

            <section className="max-w-7xl mx-auto px-4 py-12">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold">
                        <span className="bg-red-600 text-white px-3 py-1 rounded-sm tracking-wide">
                            POPULAR TALENT CATEGORIES
                        </span>
                    </h2>
                    <p className="mt-4 text-gray-600">
                        Select the most relevant performers from the best universe of talent.
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 place-items-center">
                    {categories.map((cat, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                            <div className="w-28 h-28 relative rounded-xl overflow-hidden shadow hover:scale-105 transition-transform duration-200">
                                <Image
                                    src={cat.image}
                                    alt={cat.label}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <p className="mt-2 text-sm font-medium text-center">{cat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 py-10">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                        <Image src="/navratri.webp" alt="Register" width={50} height={50} />
                        <h2 className="text-xl font-extrabold tracking-wide">REGISTER 2024</h2>
                    </div>
                    <button className="px-4 py-2 border border-red-600 text-red-600 rounded hover:bg-red-600 hover:text-white transition">
                        View All
                    </button>
                </div>
                <div className="relative w-full overflow-hidden rounded-lg shadow">
                    <Image
                        src="/open-mic.webp"
                        alt="Open Mic"
                        width={1200}
                        height={600}
                        className="w-full h-auto object-cover"
                    />

                    <button className="absolute bottom-8 right-8 bg-red-600 text-white px-5 py-3 rounded-xl text-lg font-semibold shadow hover:bg-white hover:text-red-600 transition">
                        REGESTRATION OPEN
                    </button>
                </div>


            </section>
        </>
    );
};

export default MainSection;
