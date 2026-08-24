import { type Request, type Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { db } from "../config/db.ts";
import { authenticate } from "../middlewares/authentificate.ts";
import { type Posts } from "../@types/index.ts";

const JWT_SECRET = process.env.JWT_SECRET as string;

export const routes = (app: any) => {
  app.post('/auth/signup', (req: Request, res: Response) => {
    const { firstname, lastname, login, password } = req.body;
    const password__hash = bcrypt.hashSync(password, 10);
    const sql = 'INSERT INTO users (firstname, lastname, login, password) VALUES (?,?,?,?)';

    db.run(sql, [firstname, lastname, login, password__hash], (err: Error) => {
      if (err) return res.status(500).json({error: 'не удалось зарегистрировать пользователя'});

      res.status(200).json({
        message: 'Пользователь зарегистрирован',
        users: [firstname, lastname, login, password__hash]
      })
    })
  })

  app.post('/auth/login', (req: Request, res: Response) => {
    const { login, password } = req.body;

    db.get('SELECT id, login, password FROM users WHERE login = ?', [login], (err, user: any) => {
      if (err) return res.status(500).json({error: err});
      if (!login) return res.status(401).json({err: 'Неверный логин или пароль'});

      const ok = bcrypt.compareSync(password, user.password);
      if (!ok) return res.status(401).json({error: 'Неверный логин или пароль'});

      const token = jwt.sign({
        id: user.id,
        login: user.login
      }, JWT_SECRET, {expiresIn: '7d'});

      res.json({
        token
      })
    })
  })

  app.get('/me', authenticate, (req: Posts, res: Response) => {
    db.get('SELECT id, login, created_at FROM users WHERE id = ?', [req.user.id], (err, user) => {
      if (err) return res.status(500).json({error: 'Не удалось получить пользователя'});
      if (!user) return res.status(404).json({error: 'Пользователь не найден'});
      
      res.json({user});
    });
  })

  // crud
  app.post('/posts', authenticate, (req: Posts, res: Response) => {
    const { title, desc, link } = req.body;
    const sql = 'INSERT INTO posts (title, desc, link, user_id) VALUES (?,?,?,?)';

    if(!title) return res.status(400).json({error: 'Поле title пустое'})
    
    db.run(sql, [title, desc, link, req.user.id], (err) => {
      if (err) return res.status(500).json({error: err.message});
      
      res.status(201).json({
        message: 'Задача успешно создана',
        title: title
      })
    })
  })  

  app.get('/posts', authenticate, (req: Request, res: Response) => {

  })
}