import { fileURLToPath } from "url";
import serveStatic from "serve-static";
import express from "express";
import path from "path";

const app = express();
const __dirname = fileURLToPath(import.meta.url);
app.use(serveStatic(path.join(__dirname, "dist")));
const port = process.env.PORT || 80;
app.listen(port);
