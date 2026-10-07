"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

    const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
    const toggleMobileDropdown = () => setIsMobileDropdownOpen(!isMobileDropdownOpen);

    return (
        <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-100 shadow-sm transition-all duration-300">
            <div className="my-container flex items-center justify-between py-4 sm:py-5">

                {/* Premium Brand Logo (Next.js Image) */}
                <Link href="/" className="relative z-50 flex items-center shrink-0">
                    <Image
                        src="/logo.png" // Requires a placeholder SVG in your public folder
                        alt="Sattva Skin Clinic"
                        width={180}
                        height={48}
                        className="w-36 sm:w-44 h-auto object-contain"
                        priority
                    />
                </Link>

                {/* Desktop Navigation (Plus Jakarta Sans via font-sans) */}
                <nav className="hidden lg:flex items-center gap-10 font-sans">

                    {/* Dropdown Menu Trigger & Body */}
                    <div className="group relative py-2">
                        <button className="flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-primary transition-colors focus:outline-none">
                            Treatments
                            <svg
                                className="w-4 h-4 text-slate-400 group-hover:text-primary transition-transform duration-300 group-hover:rotate-180"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {/* Smooth Fade-in & Slide-up Dropdown */}
                        <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-slate-100 shadow-xl opacity-0 translate-y-4 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 z-50 flex flex-col py-2">
                            <Link href="#laser" className="px-5 py-3 text-sm font-medium text-slate-600 hover:text-primary hover:bg-slate-50 transition-colors">
                                Advanced Laser Therapy
                            </Link>
                            <Link href="#aesthetics" className="px-5 py-3 text-sm font-medium text-slate-600 hover:text-primary hover:bg-slate-50 transition-colors">
                                Clinical Aesthetics
                            </Link>
                            <Link href="#rejuvenation" className="px-5 py-3 text-sm font-medium text-slate-600 hover:text-primary hover:bg-slate-50 transition-colors">
                                Skin Rejuvenation
                            </Link>
                        </div>
                    </div>

                    {/* Standard Links with Smooth Expanding Underline */}
                    <Link href="#technology" className="group relative py-2 text-sm font-semibold text-slate-700 hover:text-primary transition-colors">
                        Technology
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 ease-out group-hover:w-full"></span>
                    </Link>
                    <Link href="#about" className="group relative py-2 text-sm font-semibold text-slate-700 hover:text-primary transition-colors">
                        About Clinic
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 ease-out group-hover:w-full"></span>
                    </Link>
                </nav>

                {/* Desktop Actions */}
                <div className="hidden lg:flex items-center gap-8">
                    <a
                        href="tel:+919265107200"
                        className="flex items-center gap-2 text-sm font-bold tracking-wide text-slate-700 hover:text-primary transition-colors font-sans"
                    >
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        +91 92651 07200
                    </a>

                    {/* Elite Premium CTA Button (Outfit via font-heading) */}
                    <button className="font-heading bg-primary text-white px-8 py-3.5 rounded-none text-sm font-bold uppercase tracking-wider shadow-md hover:-translate-y-1 hover:shadow-xl hover:bg-slate-900 transition-all duration-300">
                        Book Priority Slot
                    </button>
                </div>

                {/* Mobile Toggle Hamburger Button */}
                <button
                    onClick={toggleDrawer}
                    className="lg:hidden relative z-50 p-2 text-slate-700 hover:text-primary transition-colors focus:outline-none"
                    aria-label="Toggle mobile menu"
                >
                    {isDrawerOpen ? (
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Offcanvas Drawer */}
            <div
                className={`fixed inset-0 z-40 transform transition-transform duration-500 ease-out lg:hidden ${isDrawerOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                {/* Soft Background Fade Overlay */}
                <div
                    className={`absolute inset-0 bg-slate-900 transition-opacity duration-500 ease-out ${isDrawerOpen ? "opacity-40" : "opacity-0"
                        }`}
                    onClick={toggleDrawer}
                ></div>

                {/* Drawer Body */}
                <div className="absolute right-0 top-0 bottom-0 w-4/5 sm:w-2/3 bg-white border-l border-slate-100 pt-24 px-8 pb-10 flex flex-col shadow-2xl overflow-y-auto">
                    <nav className="flex flex-col gap-6 flex-1 font-sans">

                        {/* Mobile Accordion Dropdown */}
                        <div className="flex flex-col border-b border-slate-100 pb-4">
                            <button
                                onClick={toggleMobileDropdown}
                                className="flex items-center justify-between w-full text-lg font-bold text-slate-800 hover:text-primary transition-colors focus:outline-none"
                            >
                                Treatments
                                <svg
                                    className={`w-5 h-5 text-slate-500 transition-transform duration-300 ease-in-out ${isMobileDropdownOpen ? "rotate-180" : "rotate-0"}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {/* Accordion Smooth Height Transition */}
                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${isMobileDropdownOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"
                                    }`}
                            >
                                <div className="flex flex-col gap-4 pl-4 border-l-2 border-slate-100 ml-2">
                                    <Link href="#laser" onClick={toggleDrawer} className="text-base font-medium text-slate-600 hover:text-primary transition-colors">
                                        Advanced Laser Therapy
                                    </Link>
                                    <Link href="#aesthetics" onClick={toggleDrawer} className="text-base font-medium text-slate-600 hover:text-primary transition-colors">
                                        Clinical Aesthetics
                                    </Link>
                                    <Link href="#rejuvenation" onClick={toggleDrawer} className="text-base font-medium text-slate-600 hover:text-primary transition-colors">
                                        Skin Rejuvenation
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <Link
                            href="#technology"
                            onClick={toggleDrawer}
                            className="text-lg font-bold text-slate-800 hover:text-primary transition-colors border-b border-slate-100 pb-4"
                        >
                            Technology
                        </Link>
                        <Link
                            href="#about"
                            onClick={toggleDrawer}
                            className="text-lg font-bold text-slate-800 hover:text-primary transition-colors border-b border-slate-100 pb-4"
                        >
                            About Clinic
                        </Link>
                    </nav>

                    {/* Mobile Footer Actions */}
                    <div className="flex flex-col gap-6 mt-12">
                        <a
                            href="tel:+919265107200"
                            className="flex items-center justify-center gap-3 text-lg font-bold text-slate-800 hover:text-primary transition-colors"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            +91 92651 07200
                        </a>
                        <button className="w-full font-heading bg-primary text-white px-6 py-4 rounded-none text-sm font-bold uppercase tracking-wider shadow-md hover:bg-slate-900 transition-colors text-center">
                            Book Priority Slot
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}