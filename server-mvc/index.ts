import express, { Request, Response } from "express";
import listEndpoints from "express-list-endpoints";

const app = express();
const port = 3000;

app.use(express.json()); //middleware that allows for us to use json

app.get("/", (req: Request, res: Response) => {
  return res.redirect("http://google.com");
});

app.get("/api/books/:bookId", (req: Request, res: Response) => {
  console.log(req.params.bookId);
  return res.send(req.params.bookId);
});

app.post("/api/data", (req: Request, res: Response) => {
  console.log(req.body);
  return res.sendStatus(200);
});

// app.all("/api/all", (req, res) => {
//   return res.sendStatus(200);
// });

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

console.table(listEndpoints(app));
