import { Router } from "./router/router.js";
import { PATHS } from "./router/routes.js";
import { authUser } from "./service/auth/user.js";


export const footer = document.getElementById("footer");
export const loadingContainer = document.getElementById("content");
const router = new Router(PATHS);

window.addEventListener("load", () => {
  footer.classList.remove("d-none");
  loadingContainer.classList.add("loading");
  setTimeout(() => {
    if (localStorage.getItem("user")) {
      const { username, password } = JSON.parse(localStorage.getItem("user"))
      authUser(username, password, navigator, () => { })
      footer.classList.add("d-none");
      loadingContainer.classList.remove("loading");
    } else {
      footer.classList.add("d-none");
      loadingContainer.classList.remove("loading");
      router.load("login");
    }
  }, 1000)
});

export function navigator(path = "/") {
  router.load(path);
}


window.addEventListener("reload", () => window.history.pushState({}, "done", "/"));