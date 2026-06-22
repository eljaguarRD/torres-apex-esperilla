import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="relative min-h-[100dvh] flex flex-col text-white overflow-hidden">
            {/* Background Image — tower positioned center-right */}
            <div 
                className="absolute inset-0 z-0 bg-cover animate-slow-zoom"
                style={{
                    backgroundImage: "url('/images/Apex%20V1.webp')",
                    backgroundPosition: "65% bottom",
                }}
            ></div>

            {/* Gradient: bottom-heavy so tower is clear on top, card readable at bottom */}
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#0c1839]/95 via-[#0c1839]/30 to-[#0c1839]/10"></div>
            {/* On desktop: left-side gradient so card is readable, right side transparent */}
            <div className="absolute inset-0 z-0 hidden lg:block bg-gradient-to-r from-[#0c1839]/80 via-[#0c1839]/20 to-transparent"></div>

            {/* Spacer: pushes card to the bottom */}
            <div className="flex-1"></div>

            {/* Card — compact on mobile, larger on desktop */}
            <div className="relative z-10 w-full lg:w-1/2 px-4 sm:px-6 lg:pl-16 lg:pr-8 pb-10 lg:pb-16">
                <div className="bg-[#0c1839]/55 backdrop-blur-md border border-white/10 p-5 sm:p-8 md:p-10 rounded-2xl shadow-2xl text-left">
                    <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3 drop-shadow-xl tracking-tight">
                        TORRE EN LA <span className="text-[#F97316]">ESPERILLA</span>
                    </h1>
                    {/* Description hidden on mobile to keep card compact */}
                    <p className="hidden sm:block text-lg md:text-xl text-gray-200 mb-6 font-light">
                        Apartamentos 100% familiares de 2 y 3 habitaciones, enfocados en la funcionalidad, iluminación y ventilación natural.
                    </p>

                    <div className="flex flex-wrap items-start gap-3 text-sm md:text-base mt-3 sm:mt-0">
                        <div className="flex items-center gap-2 bg-black/40 px-3 py-1.5 rounded-full border border-white/10">
                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                            <span className="text-gray-200">Administración Fiduciaria</span>
                        </div>
                        <div className="flex items-center gap-2 bg-black/40 px-3 py-1.5 rounded-full border border-white/10">
                            <span className="text-[#F97316]">Entrega:</span>
                            <span className="text-gray-200 font-semibold">Marzo 2030</span>
                        </div>
                    </div>
                </div>

                {/* Scroll arrow — desktop only */}
                <div className="mt-6 animate-bounce hidden lg:block">
                    <a href="#location" className="inline-block p-4 rounded-full bg-black/30 hover:bg-black/50 transition-colors backdrop-blur-sm border border-white/10 shadow-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </a>
                </div>
            </div>

            <style>{`
                @keyframes slow-zoom {
                    0% { transform: scale(1); }
                    100% { transform: scale(1.1); }
                }
                .animate-slow-zoom {
                    animation: slow-zoom 20s infinite alternate ease-in-out;
                }
            `}</style>
        </header>
    );
};

export default Header;
