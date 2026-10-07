"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

// Required Swiper Styles
import 'swiper/css';
import 'swiper/css/navigation';

interface MachineProps {
    name: string;
    benefits: string[];
    imageSrc: string;
}

const machines: MachineProps[] = [
    {
        name: 'Soprano Titanium™',
        benefits: [
            'Virtually painless ICE Plus cooling',
            'Ultra-fast session times'
        ],
        imageSrc: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQAFOtbXPiu4YpbZcfMjimauEQvnSHwPGUKv2QX9OvhTCYH-HXjQc_DhMa1iyRpPBna0in00aZVHZuiBFY-SGWvuFAL3oD--AyF',
    },
    {
        name: 'PicoSure® Pro',
        benefits: [
            'Shatters pigment without heat',
            'Zero downtime revitalization'
        ],
        imageSrc: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcTJxqyGWxANOro0rzdF5OAYUm_3wBdhejvcc5zlg21TnO4PXErXWTy9vss3PZqxGZy3v5iyWg5RDpOgBTx4Mh69OVghxbWb3cMC',
    },
    {
        name: 'Q-Switch Nd:YAG',
        benefits: [
            'Targeted melanin breakdown',
            'Hollywood Carbon Peel ready'
        ],
        imageSrc: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQeE8rTtUZ0U6bSZcmwMr-fepL_KwXunGLNNeJTbg4yCVhDRZuDJ56jwKt9mxAKjJxEnH7J0xEYNX5CHpbGKAcxGQjNoDBKPGfz',
    },
    {
        name: 'Soprano Titanium™',
        benefits: [
            'Virtually painless ICE Plus cooling',
            'Ultra-fast session times'
        ],
        imageSrc: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQAFOtbXPiu4YpbZcfMjimauEQvnSHwPGUKv2QX9OvhTCYH-HXjQc_DhMa1iyRpPBna0in00aZVHZuiBFY-SGWvuFAL3oD--AyF',
    },
    {
        name: 'PicoSure® Pro',
        benefits: [
            'Shatters pigment without heat',
            'Zero downtime revitalization'
        ],
        imageSrc: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcTJxqyGWxANOro0rzdF5OAYUm_3wBdhejvcc5zlg21TnO4PXErXWTy9vss3PZqxGZy3v5iyWg5RDpOgBTx4Mh69OVghxbWb3cMC',
    },
    {
        name: 'Q-Switch Nd:YAG',
        benefits: [
            'Targeted melanin breakdown',
            'Hollywood Carbon Peel ready'
        ],
        imageSrc: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQeE8rTtUZ0U6bSZcmwMr-fepL_KwXunGLNNeJTbg4yCVhDRZuDJ56jwKt9mxAKjJxEnH7J0xEYNX5CHpbGKAcxGQjNoDBKPGfz',
    }
];

export default function ClinicalTechnologyCentered() {
    // Using useRef to connect the custom UI buttons to the Swiper instance
    const swiperRef = useRef<SwiperType | null>(null);

    return (
        <section className="bg-white py-32 w-full overflow-hidden">
            <div className="my-container">

                {/* Centered Editorial Header */}
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">

                    {/* Minimal Pill Badge */}
                    {/* <span className="inline-flex items-center rounded-full bg-slate-50 border border-slate-200 px-4 py-1.5 text-xs font-bold text-slate-800 tracking-widest uppercase mb-8 shadow-sm">
                        Clinical Technology
                    </span> */}

                    {/* Massive Cinematic Heading */}
                    <h2 className="font-outfit text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-4 text-center">     Elite Clinical   <span style={{ color: '#1B528B' }}>Machinery</span>
                    </h2>

                    {/* Clean Subtext */}
                    <p className="font-plus-jakarta text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto">
                        Engineered for perfection. We deploy only the most advanced, globally recognized laser and radiofrequency systems to guarantee unparalleled safety and transformative results.
                    </p>

                </div>

                {/* Carousel Section */}
                <div className="w-full relative px-4 md:px-0">
                    <Swiper
                        modules={[Navigation, A11y]}
                        spaceBetween={32}
                        slidesPerView={1}
                        loop={true}
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        grabCursor={true}
                        breakpoints={{
                            768: { slidesPerView: 2, spaceBetween: 32 },
                            1024: { slidesPerView: 3, spaceBetween: 40 },
                        }}
                        className="w-full !overflow-visible pb-4" // Padding bottom to prevent shadow clipping on hover
                    >
                        {machines.map((machine, index) => (
                            <SwiperSlide key={index} className="h-auto">

                                {/* Ultra-Minimal Machine Card */}
                                <div className="group h-full flex flex-col bg-white rounded-3xl border border-slate-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md overflow-hidden">

                                    {/* Top Half: Soft Gray Image Backdrop */}
                                    <div className="relative w-full h-72 bg-slate-50 p-6 flex items-center justify-center border-b border-slate-50">
                                        <Image
                                            src={machine.imageSrc}
                                            alt={machine.name}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105 mix-blend-multiply opacity-90"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        />
                                    </div>

                                    {/* Bottom Half: Content & FDA Badge */}
                                    <div className="p-8 flex flex-col flex-grow bg-white">

                                        <div className="flex items-start justify-between gap-4 mb-8">
                                            <h3 className="font-outfit text-2xl font-bold text-slate-900 leading-tight">
                                                {machine.name}
                                            </h3>
                                            {/* FDA Approved Tag */}
                                            <span className="shrink-0 bg-slate-50 border border-slate-100 text-slate-600 text-xs font-bold tracking-wide uppercase px-3 py-1 rounded-full">
                                                FDA Approved
                                            </span>
                                        </div>

                                        {/* Crisp SVG Bullet Points */}
                                        <ul className="mt-auto space-y-4">
                                            {machine.benefits.map((benefit, bIndex) => (
                                                <li key={bIndex} className="flex items-start gap-3">
                                                    <div className="mt-0.5 flex-shrink-0">
                                                        <svg className="w-5 h-5" style={{ color: '#1B528B' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </div>
                                                    <span className="font-plus-jakarta text-slate-700 text-sm font-medium leading-relaxed">
                                                        {benefit}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>

                                    </div>
                                </div>

                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Centered Navigation Buttons (Pill Housing Style) */}
                <div className="mt-16 flex items-center justify-center gap-6">
                    <button
                        onClick={() => swiperRef.current?.slidePrev()}
                        className="p-4 rounded-full bg-white shadow-sm border border-slate-200 hover:bg-slate-50 hover:shadow-md hover:-translate-x-1 transition-all duration-300"
                        aria-label="Previous machine"
                    >
                        <svg className="w-5 h-5 text-slate-800" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>

                    <button
                        onClick={() => swiperRef.current?.slideNext()}
                        className="p-4 rounded-full bg-white shadow-sm border border-slate-200 hover:bg-slate-50 hover:shadow-md hover:translate-x-1 transition-all duration-300"
                        aria-label="Next machine"
                    >
                        <svg className="w-5 h-5 text-slate-800" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>

            </div>
        </section>
    );
}