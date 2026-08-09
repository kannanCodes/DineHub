import { Request, Response, NextFunction } from "express";
import Joi from "joi";

export const validateMiddleware = (schema: Joi.ObjectSchema) => {
     return (req: Request, res: Response, next: NextFunction) => {
          const { error } = schema.validate(req.body, {
               abortEarly: false,
               stripUnknown: true,
          });

          if (error) {
               res.status(400).json({
                    success: false,
                    message: "Validation failed",
                    errors: error.details.map((detail) => detail.message),
               });

               return;
          }

          next();
     };
};