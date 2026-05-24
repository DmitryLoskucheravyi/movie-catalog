import { Request, Response, NextFunction } from "express";

export const errorHandler = (
  error: unknown,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  console.error(error);

  res.status(500).json({
    message: "Internal server error"
  });
};