import { getTemplate } from "../utils/getTemplate.js";
import { loadScript } from "../utils/loadScript.js";

export class Router {

    constructor(paths) {
        this.paths = paths;
        this.initRouter()
    }

    initRouter() {
        const { location: { pathname = "/" } } = window;
        const URL = pathname == "/" || pathname == "/index" ? "splash" : pathname.replace("/","");
        this.load(URL);
    }

    async load(page = "home") {
        const { paths } = this;
        const { path, router } = paths[page] || paths.error;
        const template = await getTemplate(router);
        loadScript(page);
        const $CONTAINER = document.querySelector("#content");
        $CONTAINER.innerHTML = template;
        window.history.pushState({}, "done", path);
    }
}

