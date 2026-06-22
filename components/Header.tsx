import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="relative min-h-[90vh] flex items-start justify-start text-white overflow-hidden pt-32 pb-16">
            {/* Background Image */}
            <div 
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transform scale-105 animate-slow-zoom"
                style={{
                    backgroundImage: "url('/images/Apex%20V1.jpg')",
                    backgroundPosition: "center bottom",
                }}
            ></div>
            
            {/* Overlays for better text readability on the top */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0c1839]/80 via-[#0c1839]/20 to-transparent"></div>
            
            <div className="relative z-10 container mx-auto px-6 w-full flex flex-col items-start">
                <div className="w-full md:max-w-2xl lg:max-w-3xl bg-[#0c1839]/40 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl text-left">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 drop-shadow-xl tracking-tight">
                        TORRE EN LA <span className="text-[#F97316]">ESPERILLA</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light">
                        Apartamentos 100% familiares de 2 y 3 habitaciones, enfocados en la funcionalidad, iluminación y ventilación natural.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row items-start gap-4 text-sm md:text-base">
                        <div className="flex items-center gap-2 bg-black/40 px-4 py-2 rounded-full border border-white/10">
                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                            <span className="text-gray-200">Administración Fiduciaria</span>
                        </div>
                        <div className="flex items-center gap-2 bg-black/40 px-4 py-2 rounded-full border border-white/10">
                            <span className="text-[#F97316]">Entrega:</span>
                            <span className="text-gray-200 font-semibold">Marzo 2030</span>
                        </div>
                    </div>
                </div>

                <div className="mt-auto pt-24 animate-bounce hidden md:block">
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
