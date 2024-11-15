export function add(a: number, b: number): number {
  return a + b;
}

const PORT:string = Deno.env.get("SERVER_PORT") ?? "8000";

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.log("Luca Rogers information api");
  console.log("Listening on http://localhost:" + PORT + '/')
}

import { Application, Router } from "@oak/oak";
import { oakCors } from "@tajpouria/cors";

const router = new Router();

router.get("/", (context) => {
  context.response.body = {"commands" : "server/hello"}
})

router.get("/server/hello", (context) => {
  context.response.body = {"message": "hello World"};
});

const app = new Application();
app.use(oakCors());
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: parseInt(PORT) });
