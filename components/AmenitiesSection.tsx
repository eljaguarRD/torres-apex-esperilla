import React from 'react';

// Updated amenities list from the user's second image
const amenitiesList = [
  'Piscina recreativa.',
  'Carril de natación.',
  'Indoor Gym diseñado y equipado por profesionales de renombre.',
  'Outdoor training.',
  'Recovery área.',
  'Kids playground.',
  'Serenity space.',
  'Lounge amueblado y equipado.',
  'Terraza con open Kitchen totalmente equipada.',
];

const CheckIcon: React.FC = () => (
    <svg className="w-6 h-6 mr-3 text-[#F97316] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const AmenitiesSection: React.FC = () => {
  return (
    <section id="amenities">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#F97316] font-sans">Áreas Sociales</h2>
      <div className="max-w-4xl mx-auto bg-blue-900/50 rounded-3xl p-6 md:p-10 shadow-2xl backdrop-blur-sm border border-blue-700/50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
          {amenitiesList.map((amenity, index) => (
            <div key={index} className="flex items-start">
              <CheckIcon />
              <span className="text-gray-200 text-lg leading-relaxed">{amenity}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;