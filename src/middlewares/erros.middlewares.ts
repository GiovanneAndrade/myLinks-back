import { Request, Response, NextFunction } from "express";
import { ApiError } from "../erros/erros";

export default function errorHandler(
  error: Error & Partial<ApiError>,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const statusCode = error.statusCode ?? 500
  const message = error.statusCode ? error.message : 'Internal Server Error'
 
  return res.status(statusCode).json({ message })
}