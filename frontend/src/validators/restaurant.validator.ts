import type { CreateRestaurantData } from "../types/restaurant.types";

export const validateRestaurantForm = (
  formData: CreateRestaurantData
): Partial<Record<keyof CreateRestaurantData, string>> => {
  const newErrors: Partial<Record<keyof CreateRestaurantData, string>> = {};

  const name = formData.name.trim();
  if (!name) newErrors.name = "Name is required";
  else if (name.length < 2) newErrors.name = "Name must be at least 2 characters";
  else if (name.length > 100) newErrors.name = "Name cannot exceed 100 characters";

  const address = formData.address.trim();
  if (!address) newErrors.address = "Address is required";
  else if (address.length < 5) newErrors.address = "Address must be at least 5 characters";
  else if (address.length > 255) newErrors.address = "Address cannot exceed 255 characters";

  const contact = formData.contact.trim();
  if (!contact) newErrors.contact = "Contact is required";
  else if (contact.length < 10) newErrors.contact = "Contact must be at least 10 digits";
  else if (contact.length > 20) newErrors.contact = "Contact cannot exceed 20 digits";

  return newErrors;
};
