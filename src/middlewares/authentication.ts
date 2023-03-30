import prisma from "../database/db";
import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import * as allUsers from '../repositores/session.repository'
const secretKey: string = process.env.SECRET_KEY!;

async function verifyToken(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Token não fornecido." });
  }

  jwt.verify(token, secretKey, async (err, payload: jwt.JwtPayload) => {
    if (err) {
      return res.status(401).json({ message: "Token inválido." });
    }

    const user = await prisma.user.findUnique({ where: { id: payload.id } });

    if (!user) {
      return res.status(401).json({ message: "Usuário não encontrado." });
    }
 
    req.user = { userId: user.id, email: user.email, name: user.name };
    
    next();
  });
}
export { verifyToken };
