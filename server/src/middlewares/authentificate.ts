import { type Response } from "express";
import { type Posts } from "../@types/index.ts";
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET as string;

export function authenticate(req: Posts, res: Response, next: any) {
  const authHeader = req.headers.authorization || '';
  const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : '';

  if (!token) return res.status(401).json({error: 'Нужен токен авторизации'});

  jwt.verify(token, JWT_SECRET, (err: any, user: any) => {
    if (err) return res.status(401).json({error: 'Токен не действителен или истек'});
    req.user = user;
    next();
  });
}