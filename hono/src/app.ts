import { Hono } from "hono";

export const app = new Hono();

app.get("/", (c) => c.json({ hello: "world" }));

app.get("/health", (c) => c.json({ ok: true }));
