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

// Matches the backend's sendSuccess() response shape
export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}