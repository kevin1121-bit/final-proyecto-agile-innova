export async function getTemplate(path) {
   const res = await fetch(`/src/pages/${path}.html`);
   const template = res.text();
   return template;
}