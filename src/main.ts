import { createApp, type AppInstance } from "./app";

document.addEventListener("DOMContentLoaded", () => {
  const app1 = createApp();
  app1.on("open", () => {
    console.log("open");
  });
  const btn1 = document.querySelector("#btn1");
  btn1?.addEventListener("click", () => {
    app1.method.open();
  });

  const app2 = createApp();
  const btn2 = document.querySelector("#btn2");
  btn2?.addEventListener("click", () => {
    app2.method.open();
  });
});
