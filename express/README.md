# express + typescript + vitest on AWS Lambda

Same Express app runs on a laptop in dev and on Lambda in prod.

| Command | What |
|---------|------|
| `pnpm dev` | Run locally with hot reload, `http://localhost:3000` |
| `pnpm test` | Run vitest |
| `pnpm typecheck` | `tsc --noEmit` |
| `pnpm build` | Bundle `src/lambda.ts` → `dist/lambda.cjs` (the Lambda artifact) |

## Files
- `src/app.ts` — the Express app (the only thing under test)
- `src/server.ts` — local dev entrypoint (`app.listen`)
- `src/lambda.ts` — Lambda handler via `serverless-http`
- `src/app.test.ts` — tests

## Deploy to Lambda
The Express app is untouched; `serverless-http` adapts API Gateway events to it.

1. `pnpm build` (produces `dist/lambda.cjs`, deps bundled in)
2. Zip `dist/lambda.cjs` (or use a container/sam/sst) and point the Lambda at `dist/lambda.cjs`'s `handler` export
