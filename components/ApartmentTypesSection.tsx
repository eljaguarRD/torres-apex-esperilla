
import React from 'react';
import type { ApartmentType } from '../types';
import ApartmentCard from './ApartmentCard';

const apartmentTypes: ApartmentType[] = [
  {
    type: 'A',
    size: '165 m²',
    price: 'Desde US$436,000',
    features: [
      '3 habitaciones',
      '3.5 baños',
      'Estudio',
      'Sala',
      'Comedor',
      'Cocina',
      'Balcón tipo terraza',
      'Área de lavado',
      'Cuarto de servicio con baño'
    ],
    image: '/images/Cocina%20Apex%20II%20Final.webp',
    planImage: '/images/Planta%20Tipo%20Apex-A.webp'
  },
  {
    type: 'B',
    size: '102 m²',
    price: 'Desde US$270,000',
    features: [
      '2 habitaciones', '2 baños', 'Sala', 'Comedor', 'Cocina',
      'Balcón', 'Área de lavado', 'Cuarto de servicio con baño'
    ],
    image: '/images/Sala%20Apto%20B%20Apex%20II%20Final.webp',
    planImage: '/images/Planta%20Tipo%20Apex-B.webp'
  },
  {
    type: 'C',
    size: '93 m²',
    price: 'Desde US$243,000',
    features: [
      '2 habitaciones',
      '2.5 baños',
      'Sala',
      'Comedor',
      'Cocina',
      'Balcón',
      'Área de lavado'
    ],
    image: '/images/Sala%20Apto%20C%20Apex%20II%20Final.webp',
    planImage: '/images/Planta%20Tipo%20Apex-C.webp'
  },
  {
    type: 'D',
    size: '121 m²',
    price: 'US$330,000',
    features: [
      '2 habitaciones',
      '2.5 baños',
      'Estudio',
      'Sala',
      'Comedor',
      'Cocina',
      'Balcón',
      'Área de lavado',
      'Cuarto de servicio con baño'
    ],
    image: '/images/Sala%20Apto%20D%20Apex%20II%20Final.webp',
    planImage: '/images/Planta%20Tipo%20Apex-D.webp'
  },
  {
    type: 'E',
    size: '127 m²',
    price: 'US$344,000',
    features: [
      '3 habitaciones',
      '2.5 baños',
      'Sala',
      'Comedor',
      'Cocina',
      'Balcón',
      'Área de lavado',
      'Cuarto de servicio con baño'
    ],
    image: '/images/Sala%20Apto%20E%20Apex%20II%20Final.webp',
    planImage: '/images/Planta%20Tipo%20Apex-E.webp'
  },
  {
    type: 'F',
    size: '105 m²',
    price: 'US$299,000',
    features: [
      '2 habitaciones',
      '2.5 baños',
      'Sala',
      'Comedor',
      'Cocina',
      'Balcón',
      'Área de lavado',
      'Cuarto de servicio con baño'
    ],
    image: '/images/Sala%20Apto%20F%20Apex%20II%20Final.webp',
    planImage: '/images/Planta%20Tipo%20Apex-F.webp'
  },
  {
    type: 'G',
    size: '155 m²',
    price: 'US$388,000',
    features: [
      '3 habitaciones',
      '3.5 baños',
      'Sala',
      'Comedor',
      'Cocina',
      'Balcón tipo terraza',
      'Área de lavado',
      'Cuarto de servicio con baño'
    ],
    image: '/images/Hab%20Apex%20II%20Final.webp',
    planImage: '/images/Planta%20Tipo%20Apex-G.webp'
  },
];

interface ApartmentTypesSectionProps {
  onSelectApartment: (apartment: ApartmentType) => void;
}

const ApartmentTypesSection = ({ onSelectApartment }: ApartmentTypesSectionProps) => {
  return (
    <section id="types">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#F97316] font-sans">Tipos de Apartamentos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {apartmentTypes.map((apt) => (
          <ApartmentCard key={apt.type} {...apt} onClick={() => onSelectApartment(apt)} />
        ))}
      </div>
    </section>
  );
};

export default ApartmentTypesSection;