import React from 'react';
import Image from 'next/image';

export default function BookingCTA() {
    return (
        <section className="bg-slate-50 py-32 w-full">
            <div className="my-container">

                {/* Massive Primary Brand Container */}
                <div
                    className="w-full rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row"
                    style={{ backgroundColor: '#1B528B' }}
                >

                    {/* LEFT SIDE: The Details (Text & Info) */}
                    <div className="w-full lg:w-1/2 p-10 md:p-16 flex flex-col justify-center text-white order-2 lg:order-1">

                        <h2 className="font-outfit text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-10">
                            Ready for Your <br className="hidden md:block" />
                            Best Skin?
                        </h2>

                        <div className="flex flex-col gap-6 mb-12">

                            {/* Address */}
                            <div className="flex items-start gap-4">
                                <div className="mt-1 bg-white/10 p-2 rounded-full shrink-0">
                                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div className="font-plus-jakarta text-white/90 text-lg leading-relaxed">
                                    <span className="font-bold text-white block mb-1">Sattva Skin Clinic</span>
                                    Anand, Gujarat<br />
                                    India
                                </div>
                            </div>

                            {/* Working Hours */}
                            <div className="flex items-start gap-4">
                                <div className="mt-1 bg-white/10 p-2 rounded-full shrink-0">
                                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div className="font-plus-jakarta text-white/90 text-lg leading-relaxed">
                                    <span className="font-bold text-white block mb-1">Clinic Hours</span>
                                    Mon - Sat: 10:00 AM - 7:00 PM<br />
                                    Sunday: Closed
                                </div>
                            </div>

                            {/* Contact */}
                            <div className="flex items-start gap-4">
                                <div className="mt-1 bg-white/10 p-2 rounded-full shrink-0">
                                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div className="font-plus-jakarta text-white/90 text-lg leading-relaxed">
                                    <span className="font-bold text-white block mb-1">Direct Line</span>
                                    +91 92651 07200
                                </div>
                            </div>

                        </div>

                        {/* Get Directions Button */}
                        <a
                            href="#"
                            className="inline-flex items-center justify-center gap-3 bg-white px-8 py-4 rounded-full font-plus-jakarta font-bold text-lg hover:-translate-y-1 hover:shadow-lg transition-all duration-300 w-fit"
                            style={{ color: '#1B528B' }}
                        >
                            Get Directions
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>

                    </div>

                    {/* RIGHT SIDE: The Visual & Action */}
                    <div className="w-full lg:w-1/2 relative h-96 lg:h-auto min-h-full group order-1 lg:order-2 overflow-hidden">

                        {/* Background Image with Hover Zoom */}
                        <Image
                            src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSELWVAJqEAREgMYPoxMr1AA1inD01QOiqpbGFr9nF3vrvSoutS68N6_R7zY7GVAEeOeg_-2O7Xuei4_S-uCcFwTWwOwP22qBnj"
                            alt="Luxury Clinic Waiting Area"
                            fill
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />

                        {/* Subtle dark overlay for perfect text contrast on the floating card */}
                        <div className="absolute inset-0 bg-slate-900/10 pointer-events-none" />

                        {/* Pure White Glassmorphism Floating Card */}
                        <div className="absolute bottom-6 left-6 right-6 md:left-auto md:right-10 md:bottom-10 bg-white/80 backdrop-blur-xl border border-white p-6 md:p-8 rounded-3xl shadow-xl max-w-sm z-10 flex flex-col">
                            <h3 className="font-outfit text-2xl font-bold text-slate-900 mb-2">
                                Book Your Priority Slot
                            </h3>
                            <p className="font-plus-jakarta text-slate-600 text-sm mb-6">
                                Skip the waitlist. Schedule your private consultation online today.
                            </p>

                            {/* Bold Primary Button */}
                            <button
                                className="w-full py-4 rounded-full font-plus-jakarta font-bold text-white text-center hover:scale-105 hover:shadow-lg transition-all duration-300"
                                style={{ backgroundColor: '#1B528B' }}
                            >
                                Book Appointment
                            </button>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}