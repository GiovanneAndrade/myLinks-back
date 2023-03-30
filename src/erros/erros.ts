import { NextFunction, Response } from "express";
import { ApplicationError } from "../protocols";

export class ApiError extends Error {
  public readonly statusCode: number;
  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

export class NotFoundError extends ApiError {
  constructor(message: string) {
    super(message, 404);
  }
}

export class BadRequestError extends ApiError {
  constructor(message: string) {
    super(message, 400);
  }
}

export class UnauthoredError extends ApiError {
  constructor(message: string) {
    super(message, 401);
  }
}

export function conflictError(message: string): ApplicationError {
  return {
    name: "ConflictError",
    message,
  };
}

export function InternalServerError(res: Response) {
  return res
    .status(500)
    .send({ name: "InternalServerError", message: "Internal Server Error" });
}

export function ifNotFoundError(res: Response, error: any) {
  return res.status(404).send({ error: error.name, message: error.message });
}

export function ifUnauthoredError(res: Response, error: any) {
  return res.status(401).send({ error: error.name, message: error.message });
}
