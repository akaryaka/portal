import express, { type Request, type Response } from "express";
import configDb from "./config/db.ts";

const dbRun = configDb();

const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello TypeScript + Express!");
});

app.post('/auth/signup', (req, res) => {

})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
