export function add(a: number, b: number): number {
  return a + b;
}
// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
//if (import.meta.main) {} runs every time main is ran

import { Application, Router } from "@oak/oak";
import { oakCors } from "@tajpouria/cors";

const router = new Router();

router.get("/hello", (context) => {
  context.response.body = "hello World";
});

const app = new Application();
app.use(oakCors());
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });
