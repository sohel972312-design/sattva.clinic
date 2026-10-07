import React from 'react';
import Image from 'next/image';

export default function MeetTheExpert() {
    return (
        <section className="bg-slate-50 py-18 w-full overflow-hidden">
            <div className="my-container">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-center">

                    {/* Left Column: Image with Glassmorphism Overlay */}
                    <div className="lg:col-span-5 relative z-10 mt-12 lg:mt-0 px-4 lg:px-0">
                        {/* Main Portrait */}
                        <div className="relative w-full shadow-2xl rounded-3xl overflow-hidden bg-slate-200" style={{ height: '600px' }}>
                            <Image
                                // I have used a premium placeholder image for you, just swap the src!
                                src="/IMG-20210308-WA0120.jpg"
                                alt="Dr. Nishit - Board Certified Dermatologist"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>

                        {/* Glassmorphism Stat Card */}
                        <div className="absolute -bottom-8 -right-4 lg:-right-12 bg-white/70 backdrop-blur-lg border border-white/50 p-6 rounded-3xl shadow-xl z-20 flex flex-col gap-1 max-w-xs">
                            <span className="font-outfit text-3xl font-bold text-slate-900">
                                15,000+
                            </span>
                            <span className="font-plus-jakarta text-sm font-semibold tracking-wide uppercase text-slate-700">
                                Successful Treatments
                            </span>
                            <div className="w-8 h-1 mt-2 rounded-full" style={{ backgroundColor: '#1B528B' }}></div>
                        </div>
                    </div>

                    {/* Right Column: Typography & Bio (Staggered to overlap image) */}
                    <div className="lg:col-span-7 flex flex-col justify-center relative z-20 pt-12 lg:pt-0">

                        {/* Cinematic Headline overlapping the image using negative margin */}
                        <h2 className="font-outfit text-6xl lg:text-8xl font-black text-slate-900 tracking-tighter leading-none drop-shadow-sm lg:-ml-32">
                            Meet <br />
                            Dr. <span style={{ color: '#1B528B' }}>Nishit.</span>
                        </h2>

                        {/* Bio Content Container */}
                        <div className="mt-8 lg:pl-16 max-w-2xl">
                            <h3 className="font-outfit text-xl font-bold text-slate-800 mb-4">
                                Board Certified Dermatologist & Aesthetic Surgeon
                            </h3>

                            <div className="space-y-4 font-plus-jakarta text-slate-600 text-lg leading-relaxed">
                                <p>
                                    With over a decade of clinical excellence, Dr. Nishit merges medical precision with an elite aesthetic eye. His philosophy is rooted in biological restoration—enhancing your natural architecture rather than altering it.
                                </p>
                                <p>
                                    Trained globally in advanced laser dynamics and facial proportion balancing, he has pioneered signature protocols that deliver immediate, transformative results with zero compromise on patient safety.
                                </p>
                            </div>

                            {/* Hand-Drawn Signature SVG */}
                            <div className="mt-12 opacity-80">
                                <svg
                                    className="w-48 h-auto"
                                    style={{ color: '#1B528B' }}
                                    viewBox="0 0 300 100"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M30 70 C 40 40, 50 30, 60 50 C 70 70, 75 80, 85 50 C 90 30, 95 20, 110 40 C 130 70, 150 75, 170 50 C 180 30, 190 20, 200 60 C 210 90, 220 80, 240 50 C 260 20, 280 30, 290 60"
                                        stroke="currentColor"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M100 45 L 140 40"
                                        stroke="currentColor"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                    />
                                </svg>
                                <span className="block mt-3 font-plus-jakarta text-xs font-bold tracking-widest text-slate-400 uppercase">
                                    Medical Director, Sattva Skin Clinic
                                </span>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}