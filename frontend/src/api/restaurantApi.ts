import axios from "axios";

import type {
  Restaurant,
  CreateRestaurantData,
  UpdateRestaurantData,
  ApiResponse,
} from "../types/restaurant.types";

const API_BASE = import.meta.env.VITE_API_BASE_URL || "https://dinehub-pc0z.onrender.com/api";
const BASE_URL = `${API_BASE}/restaurants`;

export const getRestaurants = async (): Promise<Restaurant[]> => {
  const response = await axios.get<ApiResponse<Restaurant[]>>(BASE_URL);
  return response.data.data;
};

export const createRestaurant = async (
  data: CreateRestaurantData
): Promise<Restaurant> => {
  const response = await axios.post<ApiResponse<Restaurant>>(BASE_URL, data);
  return response.data.data;
};

export const updateRestaurant = async (
  id: number,
  data: UpdateRestaurantData
): Promise<Restaurant> => {
  const response = await axios.put<ApiResponse<Restaurant>>(
    `${BASE_URL}/${id}`,
    data
  );
  return response.data.data;
};

export const deleteRestaurant = async (id: number): Promise<void> => {
  await axios.delete(`${BASE_URL}/${id}`);
};