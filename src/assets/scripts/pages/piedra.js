import { navigator } from "../main.js";

const piedra = JSON.parse(localStorage.getItem("piedra"));


const img = document.getElementById("show-img");
const des = document.getElementById("descripcion");
const signo = document.getElementById("nombre");
const back = document.getElementById("back");


img.setAttribute("src",piedra.imagen);
des.textContent = piedra.descripcion
signo.textContent = piedra.nombre


back.addEventListener("click",()=>{
    navigator("dashboard");
})


