import { flushSync, mount } from "svelte";
import App from "./app.svelte";
import { nanoid } from "nanoid";

export function createApp() {
  const root = document.createElement("div");
  root.id = nanoid(5);
  root.className = "__counter__";

  const app = mount(App, {
    target: root,
    props: {
      options: {},
    },
  });

  document.body.appendChild(root);
  return app;
}

export type AppInstance = ReturnType<typeof createApp>;
