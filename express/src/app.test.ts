import { describe, it, expect } from "vitest";
import request from "supertest";
import { app } from "./app";

describe("app", () => {
  it("says hello", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ hello: "world" });
  });

  it("has a health check", async () => {
    const res = await request(app).get("/health");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ ok: true });
  });
});
