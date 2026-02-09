
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
  },
  {
    type: 'B',
    size: '102 m²',
    price: 'Desde US$263,000',
    features: [
      '2 habitaciones', '2 baños', 'Sala', 'Comedor', 'Cocina',
      'Balcón', 'Área de lavado', 'Cuarto de servicio con baño'
    ],
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
  },
  {
    type: 'E',
    size: '127 m²',
    price: 'US$334,000',
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
  },
  {
    type: 'F',
    size: '105 m²',
    price: 'US$312,500',
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