
import React from 'react';
import type { ApartmentType } from '../types';

interface ApartmentCardProps extends ApartmentType {
  onClick: () => void;
}

const ApartmentCard: React.FC<ApartmentCardProps> = ({ type, size, price, features, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-blue-900/50 rounded-lg shadow-xl p-6 border border-blue-700/50 flex flex-col h-full transform hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 ease-in-out cursor-pointer"
      role="button"
      tabIndex={0}
      aria-label={`View details for apartment type ${type}`}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onClick()}
    >
      <div className="flex justify-between items-baseline mb-4 border-b-2 border-[#F97316]/50 pb-3">
        <h3 className="text-4xl font-bold text-[#F97316] font-sans">Tipo {type}</h3>
        <span className="text-xl font-semibold text-gray-200">{size}</span>
      </div>
      <p className="text-2xl font-bold text-white mb-6">{price}</p>
      <ul className="space-y-2 text-gray-300 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg className="w-4 h-4 mr-3 text-[#F97316] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApartmentCard;