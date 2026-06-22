
import React from 'react';
import type { ApartmentType } from '../types';

interface ApartmentCardProps extends ApartmentType {
  onClick: () => void;
}

const ApartmentCard: React.FC<ApartmentCardProps> = ({ type, size, price, features, image, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-[#0c1839]/60 rounded-2xl shadow-xl border border-blue-700/30 flex flex-col h-full transform hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 ease-in-out cursor-pointer overflow-hidden group"
      role="button"
      tabIndex={0}
      aria-label={`View details for apartment type ${type}`}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onClick()}
    >
      <div className="relative h-56 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url('${image}')` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c1839] via-transparent to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
          <h3 className="text-4xl font-bold text-[#F97316] font-sans drop-shadow-md">Tipo {type}</h3>
          <span className="text-xl font-semibold text-gray-200 bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">{size}</span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4">{price}</p>
        <ul className="space-y-3 text-gray-300 flex-grow text-sm md:text-base">
          {features.slice(0, 5).map((feature, index) => (
            <li key={index} className="flex items-center">
              <svg className="w-4 h-4 mr-3 text-[#F97316] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
              <span>{feature}</span>
            </li>
          ))}
          {features.length > 5 && (
            <li className="text-[#F97316] text-sm font-semibold mt-2 group-hover:underline">Ver más detalles...</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ApartmentCard;