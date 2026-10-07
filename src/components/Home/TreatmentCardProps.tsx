import React from 'react';
import Image from 'next/image';

// Types for our treatment data
interface TreatmentCardProps {
    title: string;
    description: string;
    imageSrc: string;
    gridClasses: string;
    heightClasses: string;
}

const treatments: TreatmentCardProps[] = [
    {
        title: 'Advanced Laser Therapy',
        description: 'State-of-the-art precision laser treatments for flawless, instantly rejuvenated skin and deep cellular renewal.',
        imageSrc: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQPsmsW3dYQX1Fsll8Zxthk3IjYkrkP0jCyJOFd09RwF9Px-2nwImLcM1LDodVZ2mDt8Yho1ToBGim9NgYxj_lmKO4hLG4QQvkj', // Replace with your clinical asset
        gridClasses: 'lg:col-span-2 lg:row-span-2',
        heightClasses: 'h-96 lg:h-full',
    },
    {
        title: 'Clinical Aesthetics',
        description: 'Bespoke injectable and dermal enhancements tailored for natural symmetry.',
        imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXMOqDvWHG3ID9ulQCfKotJ5thCako7nQYQCmBFBmu5HPXEty16kd1Wb0K&s=10',
        gridClasses: 'lg:col-span-1 lg:row-span-1',
        heightClasses: 'h-80',
    },
    {
        title: 'Anti-Aging Clinics',
        description: 'Next-generation age reversal protocols and preventative longevity care.',
        imageSrc: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQThfGdkhyfAnh2jXyV4RxbFFsumbj2TYZoCyftICQKEjhjFm72p1dswO4XkgvdSjTvWDAUJVnoF8BDNpq3X6SHuO9StcnLWmgf',
        gridClasses: 'lg:col-span-1 lg:row-span-1',
        heightClasses: 'h-80',
    },
    {
        title: 'Acne & Scar Revision',
        description: 'Advanced resurfacing techniques utilizing medical-grade restorative peels and microneedling.',
        imageSrc: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSKeKJ5P0EoUnlfScBUGUA-ATMUCzYOiUR4CiThA73Ktu6E_sMt9d10xsZHKxacDWe7_rq82xNX8KZMbxPvhlH4G1GzFxJjY3xD',
        gridClasses: 'lg:col-span-2 lg:row-span-1',
        heightClasses: 'h-80',
    },
];

export default function PremiumTreatments() {
    return (
        <section className="bg-slate-50 py-18 w-full">
            <div className="my-container">

                {/* Section Header */}
                <div className="mb-16 max-w-3xl">
                    <h2 className="font-outfit text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-4">
                        Premium Treatments <span className="text-[#1B528B]">&amp; Services</span>
                    </h2>
                    <p className="font-plus-jakarta text-slate-600 text-lg leading-relaxed">
                        Experience the pinnacle of dermatological science. Our ultra-luxury clinic delivers transformative results through curated, cutting-edge aesthetic technologies.
                    </p>
                </div>

                {/* Asymmetrical Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {treatments.map((treatment, index) => (
                        <div
                            key={index}
                            className={`group relative overflow-hidden rounded-3xl bg-white shadow-sm hover:shadow-xl transition-shadow duration-500 ${treatment.gridClasses} ${treatment.heightClasses}`}
                        >
                            {/* Next.js Image with Hover Zoom */}
                            <Image
                                src={treatment.imageSrc}
                                alt={treatment.title}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />

                            {/* Readability Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent pointer-events-none" />

                            {/* Card Content & Hover Interaction */}
                            <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end">
                                <h3 className="font-outfit text-white text-2xl lg:text-3xl font-semibold mb-2">
                                    {treatment.title}
                                </h3>

                                <p className="font-plus-jakarta text-white/80 text-sm lg:text-base leading-relaxed line-clamp-2">
                                    {treatment.description}
                                </p>

                                {/* 'Explore' Action with Slide-in Arrow */}
                                <div className="mt-6 flex items-center gap-3 overflow-hidden text-[#1B528B]">
                                    <span className="font-plus-jakarta font-medium text-white text-sm uppercase tracking-wider">
                                        Explore
                                    </span>

                                    {/* Arrow slides in from left to right on hover */}
                                    <div className="flex items-center justify-center bg-white rounded-full p-2 opacity-0 -translate-x-6 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-x-0">
                                        <svg
                                            className="w-4 h-4 text-[#1B528B]"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2.5"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}