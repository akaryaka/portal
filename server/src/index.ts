import express, { type Request, type Response } from "express";
import { db } from "./config/db.ts";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello TypeScript + Express!");
});

app.post('/auth/signup', (req, res) => {
  const { firstname, lastname, login, password } = req.body;

  if(!login) return res.status(400).json({error: 'поле title пустое'});

  const sql = 'INSERT INTO users (firstname, lastname, login, password) VALUES (?,?,?,?)';

  db.run(sql, [firstname,lastname,login,password], (err: Error) => {
    if (err) return res.status(500).json({error: 'не удалось зарегистрировать пользователя'});

    res.status(200).json({
      message: 'Пользователь зарегистрирован',
      users: [firstname,lastname,login,password]
    })
  })
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
