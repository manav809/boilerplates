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