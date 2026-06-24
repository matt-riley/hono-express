import express, { type Request, type Response } from "express";

export const app = express();

app.get("/", (_req: Request, res: Response) => {
  res.json({ hello: "world" });
});

app.get("/health", (_req: Request, res: Response) => {
  res.json({ ok: true });
});
