"use client";

import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/effect-fade";

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const swiperRef = useRef<SwiperType | null>(null);

    const slides = [
        {
            id: 1,
            url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80",
            alt: "Clinical Aesthetics Room",
        },
        {
            id: 2,
            url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80",
            alt: "Laser Treatment Equipment",
        },
        {
            id: 3,
            url: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80",
            alt: "Precision Dermatology Clinic Interior",
        },
    ];

    const handlePrev = () => swiperRef.current?.slidePrev();
    const handleNext = () => swiperRef.current?.slideNext();

    const slideIndexDisplay = `0${currentSlide + 1} / 0${slides.length}`;

    return (


        <>
            {/* Strictly dynamic height wrapper, standard padding, perfectly flexed */}
            <section className="relative flex flex-col items-center justify-center w-full h-auto py-20 overflow-hidden min-h-full">

                {/* Absolute Swiper Background covering the padding seamlessly */}
                <div className="absolute inset-0 z-0">
                    <Swiper
                        modules={[Autoplay, EffectFade]}
                        effect="fade"
                        autoplay={{ delay: 6000, disableOnInteraction: false }}
                        loop={true}
                        allowTouchMove={false}
                        className="w-full h-full"
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
                    >
                        {slides.map((slide) => (
                            <SwiperSlide key={slide.id}>
                                {({ isActive }) => (
                                    <div className="relative w-full h-full overflow-hidden">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src={slide.url}
                                            alt={slide.alt}
                                            // Cinematic Ken Burns strictly triggered by active slide state
                                            className={`object-cover w-full h-full origin-center ${isActive ? "animate-ken-burns" : "scale-100"
                                                }`}
                                        />
                                    </div>
                                )}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Exactly 50% opacity clean overlay for ultimate legibility */}
                <div className="absolute inset-0 z-10 bg-white opacity-50"></div>

                {/* Inner Content - Perfectly centered within .my-container */}
                {/* Key prop ensures the cinematic CSS animations organically re-fire on every slide change */}
                <div
                    key={currentSlide}
                    className="my-container relative z-20 flex flex-col items-center justify-center text-center flex-1 w-full"
                >

                    {/* Mask Reveal Badge */}
                    <div className="inline-flex items-center gap-3 rounded-none border border-slate-300 bg-white shadow-sm px-6 py-2 text-xs font-bold text-primary uppercase tracking-widest mb-10 opacity-0 animate-mask-reveal">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Advanced Clinical Dermatology
                    </div>

                    {/* Clip-Path Text Reveal Headline */}
                    <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-slate-900 mb-8 max-w-5xl leading-tight opacity-0 animate-text-clip delay-200">
                        Precision Aesthetics <br className="hidden md:block" />
                        For Skin Health
                    </h1>

                    {/* Letter-Spacing Expansion Subtext */}
                    <p className="font-sans text-lg md:text-xl text-slate-800 max-w-2xl mb-14 font-medium leading-relaxed opacity-0 animate-tracking-expand delay-400">
                        Experience personalized, science-backed skin health treatments. Dr. Nishit blends state-of-the-art clinical expertise with transformative aesthetic care to reveal your absolute best.
                    </p>

                    {/* Staggered Mask Reveal Twin CTAs */}
                    <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto opacity-0 animate-mask-reveal delay-600">
                        <button className="font-heading bg-primary text-white px-12 py-5 rounded-none text-sm font-bold uppercase tracking-wider shadow-lg hover:-translate-y-1 hover:shadow-xl hover:bg-slate-900 transition-all duration-300 w-full sm:w-auto">
                            Book Priority Slot
                        </button>
                        <button className="font-heading border border-slate-900 bg-white text-slate-900 px-12 py-5 rounded-none text-sm font-bold uppercase tracking-wider shadow-sm hover:bg-slate-900 hover:text-white transition-colors duration-300 w-full sm:w-auto">
                            Explore Treatments
                        </button>
                    </div>
                </div>

                {/* Custom Slider Control Module */}
                <div className="absolute bottom-10 right-10 lg:bottom-16 lg:right-16 z-30 flex flex-col w-48 sm:w-56 gap-5 bg-white bg-opacity-90 p-6 backdrop-blur-md border border-slate-200 shadow-xl">
                    <div className="flex items-center justify-between w-full">

                        <span className="font-heading text-lg font-bold text-slate-900 tracking-widest">
                            {slideIndexDisplay}
                        </span>

                        <div className="flex items-center gap-3">
                            <button
                                onClick={handlePrev}
                                className="text-slate-400 hover:text-primary transition-colors focus:outline-none"
                                aria-label="Previous Slide"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={handleNext}
                                className="text-slate-400 hover:text-primary transition-colors focus:outline-none"
                                aria-label="Next Slide"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Seamless Animated Progress Line */}
                    <div className="h-1 w-full bg-slate-200 relative overflow-hidden">
                        <div
                            key={currentSlide}
                            className="absolute top-0 left-0 h-full bg-primary animate-progress"
                        ></div>
                    </div>
                </div>

            </section>
        </>
    );
}