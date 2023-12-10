import { Router } from "./router/router.js";
import { PATHS } from "./router/routes.js";
import { authUser } from "./service/auth/user.js";


export const footer = document.getElementById("footer");
export const loadingContainer = document.getElementById("content");
const router = new Router(PATHS);

window.addEventListener("load", () => {
  footer.classList.remove("d-none");
  loadingContainer.classList.add("loading");
  if (localStorage.getItem("user")) {
    footer.classList.add("d-none");
    loadingContainer.classList.remove("loading");
    const {username, password} = JSON.parse(localStorage.getItem("user"))
    authUser(username,password,navigator, ()=> {})

  } else {
    footer.classList.add("d-none");
    loadingContainer.classList.remove("loading");
    router.load("login");
  }
});

export function navigator(path = "/") {
  router.load(path);
}


window.addEventListener("reload", () => window.history.pushState({}, "done", "/"));