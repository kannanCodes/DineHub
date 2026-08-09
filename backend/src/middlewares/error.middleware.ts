import { Request, Response, NextFunction } from "express";
import { AppError } from "../shared/utils/AppError";
import { MESSAGES } from "../constants/messages";

export const errorMiddleware = (
     err: unknown,
     req: Request,
     res: Response,
     next: NextFunction
) => {
     if (err instanceof AppError) {
          res.status(err.statusCode).json({
               success: false,
               message: err.message,
          });

          return;
     }

     console.error(err);

     res.status(500).json({
          success: false,
          message: MESSAGES.SERVER.INTERNAL_ERROR,
     });
};