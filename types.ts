
export interface ApartmentType {
  type: string;
  size: string;
  price: string;
  features: string[];
  image: string;
  planImage: string;
}

export interface AvailabilityUnit {
    unit: string;
    floor: number;
    rooms: string;
    area: number;
    parking: string | number;
    price: string;
}