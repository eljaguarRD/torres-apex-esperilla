
export interface ApartmentType {
  type: string;
  size: string;
  price: string;
  features: string[];
}

export interface AvailabilityUnit {
    unit: string;
    floor: number;
    rooms: string;
    area: number;
    parking: string | number;
    price: string;
}