import { type Request } from "express";

export interface Posts extends Request{
  user: {
    id: number;
    user: string;
  },
}