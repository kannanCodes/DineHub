export interface Restaurant {
  id: number;
  name: string;
  address: string;
  contact: string;
}

export interface CreateRestaurantData {
  name: string;
  address: string;
  contact: string;
}

export interface UpdateRestaurantData {
  name?: string;
  address?: string;
  contact?: string;
}