import Joi from "joi";

export const createRestaurantSchema = Joi.object({
  name: Joi.string().trim().min(2).max(100).required(),

  address: Joi.string().trim().min(5).max(255).required(),

  contact: Joi.string().trim().pattern(/^\d+$/).message("Contact must contain only numbers").min(10).max(20).required(),
});

export const updateRestaurantSchema = Joi.object({
  name: Joi.string().trim().min(2).max(100),

  address: Joi.string().trim().min(5).max(255),

  contact: Joi.string().trim().pattern(/^\d+$/).message("Contact must contain only numbers").min(10).max(20),
}).min(1);