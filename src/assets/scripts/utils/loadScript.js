export function loadScript(name) {
    const body = document.body;
    const script = document.createElement("script");
    script.src = `/src/assets/scripts/pages/login.js`;
    script.type = "module";
    script.id = name;
    body.appendChild(script);
}