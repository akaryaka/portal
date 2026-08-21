import express, { type Request, type Response } from "express";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import { db } from "./config/db.ts";

const app = express();
const port = 3000;

const JWT_SECRET = 'very-very-very-secret-omg';

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello TypeScript + Express!");
});

app.post('/auth/signup', (req, res) => {
  console.log(req.body);
  
  // const { firstname, lastname, login, password } = req.body;
  // const password__hash = bcrypt.hashSync(password, 10);

  // const sql = 'INSERT INTO users (firstname, lastname, login, password) VALUES (?,?,?,?)';

  // db.run(sql, [firstname,lastname,login,password__hash], (err: Error) => {
  //   if (err) return res.status(500).json({error: 'не удалось зарегистрировать пользователя'});

  //   res.status(200).json({
  //     message: 'Пользователь зарегистрирован',
  //     users: [firstname,lastname,login,password__hash]
  //   })
  // })
})

app.post('/auth/login', (req, res) => {

  // console.log(req.body);
  
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

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

const shutdown = () => {
  console.log('stop server');
  
  db.close(err => {
    if (err) {
      console.error('не получилось закрыть бд');
      process.exit(1);
    } else {
      console.log('бд закрыта');
      process.exit(0)
    }
  })
}

process.on('SIGINT', shutdown);
process.off('SIGTERM', shutdown);