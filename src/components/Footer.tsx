"use client"; // <-- Add this at the very top

import React from 'react';
import Image from 'next/image';
export default function PremiumFooter() {
    return (
        <footer className="bg-slate-50 border-t border-slate-200 pt-24 font-sans overflow-hidden">
            {/* Global Container */}
            <div className="container mx-auto px-6 md:px-12 lg:px-24">

                {/* The Open Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24 mb-24">

                    {/* Column 1: Brand & Details */}
                    <div className="flex flex-col text-slate-600">
                        <a href="/" className="inline-block mb-8" aria-label="Sattva Home">
                            <Image src="/logo.png" alt="Sattva Logo" className='w-auto h-20' width={100} height={40} />
                        </a>
                        <address className="not-italic leading-relaxed">
                            <p>Sattva Clinical Aesthetics</p>
                            <p className="mt-1">128 Architectural Way, Suite 400</p>
                            <p>Metropolis, NY 10001</p>
                            <p className="mt-4 font-medium text-slate-700">
                                <a href="tel:+917623933756" className="hover:text-[#1B528B] transition-colors duration-500 ease-out">
                                    +917623933756
                                </a>
                            </p>
                        </address>
                    </div>

                    {/* Column 2: Fluid Navigation */}
                    <div className="flex flex-col">
                        <h3 className="text-slate-900 font-medium mb-6 uppercase tracking-wider text-sm">Discover</h3>
                        <ul className="flex flex-col gap-4 text-slate-500">
                            {['Treatments', 'The Clinic', 'Patient Philosophy', 'Before & After', 'Book Consultation'].map((link) => (
                                <li key={link}>
                                    <a
                                        href="#"
                                        className="transition-all duration-700 ease-in-out hover:text-[#1B528B] hover:opacity-70 focus:outline-none focus:text-[#1B528B]"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Newsletter */}
                    <div className="flex flex-col">
                        <h3 className="text-slate-900 font-medium mb-6 uppercase tracking-wider text-sm">
                            Insider Skincare Advice
                        </h3>
                        <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                            Sign up for curated clinical insights and priority access to new treatments.
                        </p>
                        <form className="relative flex items-end group" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                required
                                className="w-full bg-transparent border-b border-slate-300 py-3 text-slate-700 placeholder-slate-400 focus:outline-none focus:border-[#1B528B] focus:ring-0 transition-colors duration-500 ease-in-out"
                            />
                            <button
                                type="submit"
                                className="absolute right-0 bottom-3 text-slate-400 group-focus-within:text-[#1B528B] hover:text-[#1B528B] transition-colors duration-500"
                                aria-label="Subscribe"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </form>
                    </div>

                </div>

                {/* The Grand Sign-off & Bottom Strip */}
                <div className="flex flex-col items-center mt-32 relative">
                    <span className="text-8xl sm:text-9xl font-bold text-slate-200 uppercase tracking-tighter leading-none select-none z-0 relative -mb-6 md:-mb-10 font-sans">
                        Sattva
                    </span>

                    <div className="w-full border-t border-slate-200 pt-8 pb-12 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm z-10 relative bg-transparent">
                        <p className="mb-4 md:mb-0">
                            &copy; {new Date().getFullYear()} Sattva Clinic. All rights reserved.
                        </p>

                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="flex items-center gap-2 group hover:text-[#1B528B] transition-colors duration-500 ease-out focus:outline-none"
                        >
                            <span>Back to Top</span>
                            <svg
                                className="w-4 h-4 transform group-hover:-translate-y-1 transition-transform duration-500 ease-out"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 15l7-7 7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

            </div>
        </footer>
    );
}