import React from 'react';

// Lightly polished for a premium editorial tone
const reviews = [
    {
        name: 'Manish S.',
        text: 'I visited the clinic after booking online, and they value your time perfectly. The environment is exceptionally clean and comfortable. Dr. Nishit and his staff treat patients with the utmost professionalism. He clearly possesses immense experience and expertise.',
    },
    {
        name: 'Rajvi S.',
        text: 'Dr. Nishit is a highly capable physician with quick, precise diagnoses. His trained staff is incredibly polite and approachable, and the clinic\'s ambience is simply awe-inspiring. Kudos to the entire Sattva team.',
    },
    {
        name: 'Mahesh C.',
        text: 'After consulting multiple doctors for a severe skin allergy with no improvement, I found Dr. Nishit. He prescribed a straightforward regimen and thoroughly explained my condition. Within a month, I was completely cured. A superb doctor and clinic!',
    },
];

// Duplicate the array to ensure the infinite scroll has enough content to seamlessly loop
const singleRow = [...reviews, ...reviews, ...reviews, ...reviews, ...reviews];

// Reusable Star Component
const FiveStars = () => (
    <div className="flex items-center gap-1 mb-6 text-yellow-500">
        {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ))}
    </div>
);

export default function PatientSuccessStories() {
    return (
        <section className="bg-white py-32 w-full overflow-hidden">
            <div className="my-container mb-16 text-center">
                <h2 className="font-outfit text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
                    Patient <span style={{ color: '#1B528B' }}>Success Stories</span>
                </h2>
                <p className="font-plus-jakarta text-slate-600 text-lg max-w-2xl mx-auto">
                    Real results and authentic experiences from our verified patients.
                </p>
            </div>

            {/* Marquee Container with pause-on-hover and gradient masks */}
            <div className="relative w-full pause-on-hover">

                {/* Left Fade Mask */}
                <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />

                {/* Right Fade Mask */}
                <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                {/* Single Row - Sliding Left */}
                <div className="flex w-max animate-marquee-left">
                    {singleRow.map((review, idx) => (
                        <div
                            key={`review-${idx}`}
                            className="bg-slate-50 rounded-3xl p-8 shadow-sm flex flex-col w-80 md:w-96 shrink-0 mx-4"
                        >
                            <FiveStars />
                            <p className="font-plus-jakarta text-slate-700 text-base leading-relaxed flex-grow mb-8">
                                "{review.text}"
                            </p>
                            <div className="mt-auto flex items-center gap-3 border-t border-slate-200 pt-6">
                                <span className="font-outfit text-lg font-bold text-slate-900">
                                    {review.name}
                                </span>
                                <span className="flex items-center gap-1 bg-green-50 text-green-700 px-2 py-1 rounded-full text-xs font-bold tracking-wide uppercase">
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Verified
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}