```bash
npm init -y
npm i -D typescript @types/express @types/node
npx tsc --init
npm i -D nodemon ts-node
npm i --save @types/express-list-endpoints
```

```json
  "scripts": {
    "build": "npx tsc",
    "start": "npx ts-node index.ts",
    "dev": "nodemon index.ts",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

```ts
import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
```

```ts
app
  .route("/")
  .get((req: Request, res: Response) => {
    return res.send("You made a get request");
  })
  .post((req: Request, res: Response) => {
    return res.send("You made a post request");
  })
  .put((req: Request, res: Response) => {
    return res.send("You made a put request");
  })
  .all((req: Request, res: Response) => {
    return res.send("You made an X request");
  });
```

```ts
app.get("/", (req, res) => res.send("200"))
app.get("/ab*cd", (req, res) => res.send("200"))
app.get(/abc/, (req, res) => res.send("200"))
```


```ts
function handleGetBookOne(req: Request, res: Response, next: NextFunction) {
  console.log(req.params);
  next();
}

function handleGetBookTwo(req: Request, res: Response, next: NextFunction) {
  console.log("secondCall");
  return res.send(req.params);
}

app.get("/api/books/:bookId", [handleGetBookOne, handleGetBookTwo]);
```


```ts
function middleware(req: Request, res: Response, next: NextFunction) {
  //@ts-ignore
  req.name = "Manav";
  next();
}
app.get(
  "/api/books/:bookId",
  middleware,
  (req: Request, res: Response) => {
    //@ts-ignore
    console.log(req.name);
    //@ts-ignore
    res.send(req.name);
  }
);
```

```ts
app.use(middleware) //for all routes to get the middleware
```

```bash
docker ps
docker build -t {title}:1.0 .  
docker run {name}
docker run -p 5000:3002 {name}
```