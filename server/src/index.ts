import express from "express";
import { db } from "./config/db.ts";
import { routes } from "./routes/index.ts";

const app = express();
const port = 3000;

app.use(express.json());
app.use(routes)
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