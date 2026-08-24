import express from "express";
import { db } from "./config/db.ts";
import {routes} from "./routes/index.ts";
import cors from 'cors';

const app = express();
app.use(cors({
  origin: 'http://localhost:3002', // Разрешаем запросы ТОЛЬКО с этого адреса
  credentials: true, // Разрешаем передачу куки/заголовков авторизации (если нужно)
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
const port: number | undefined = Number(process.env.PORT) || 3002 ;

routes(app);

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