
import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="relative text-white px-6 py-16 md:py-20">
            <div className="absolute inset-0 bg-blue-900/70 backdrop-blur-sm"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c1839] via-[#0c1839]/80 to-transparent"></div>
            
            <div 
                className="absolute inset-0 opacity-20" 
                style={{
                    backgroundImage: 'radial-gradient(circle at center, rgba(79, 70, 229, 0.3) 0, transparent 40%), radial-gradient(circle at top left, rgba(249, 115, 22, 0.3) 0, transparent 50%), radial-gradient(circle at bottom right, rgba(249, 115, 22, 0.3) 0, transparent 50%)',
                }}
            ></div>

            <div className="relative container mx-auto text-center">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#F97316] font-sans drop-shadow-lg">TORRE EN LA ESPERILLA</h1>
                    <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed">
                      Apartamentos 100% familiar de 2 y 3 habitaciones,
                      <br />
                      enfocados en la funcionalidad, iluminación y ventilación natural.
                    </p>
                </div>
                
                {/* Formerly AboutSection content, now integrated */}
                <div id="about" className="max-w-4xl mx-auto space-y-6 mt-12 md:mt-16">
                    <p className="text-lg text-gray-300 leading-relaxed">
                      Con sus amenidades enfocadas en el Wellness, busca desarrollar un estilo de vida de calidad y sostenible.
                    </p>
                    <div>
                      <div className="w-1/2 md:w-1/3 h-[2px] bg-[#F97316] mx-auto mb-6"></div>
                      <p className="text-lg text-gray-300 bg-blue-900/30 p-4 rounded-lg">
                        Proyecto con administración fiduciaria y fecha de entrega <strong>diciembre 2029</strong>.
                      </p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
