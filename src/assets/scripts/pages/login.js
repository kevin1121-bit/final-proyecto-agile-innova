import { footer, loadingContainer } from "../main.js";
import { authUser } from "../service/auth/user.js";
import { navigator } from "../main.js";

const formLogin = document.getElementById("form-login");

const messageError = document.getElementById("message-error");
const customMessage = document.getElementById("custom-message");

formLogin.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!messageError.classList.contains("d-none")) {
        messageError.classList.add("d-none")
    }
    loadingContainer.classList.add("loading");
    footer.classList.remove("d-none");

    setTimeout(() => {
      authUser(event.target[0].value,event.target[1].value,success,error)
    }, 1000)

})

function success(path){
    navigator(path)
    loadingContainer.classList.remove("loading");
    footer.classList.add("d-none");
}

function error(message){
    customMessage.textContent = message;
    loadingContainer.classList.remove("loading");
    footer.classList.add("d-none");
    messageError.classList.remove("d-none");
}