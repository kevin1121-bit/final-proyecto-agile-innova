import { environment } from "../../../../evironment/env.js";

export function authUser(username, password, callBack, error){
    fetch(`${environment.urlAPI}/users`, {
        method: "GET",
        headers: {
            'Content-type': "application/json",
        }
    }).then((res) => res.json())
        .then((response) => {
            if (response.some((value) => value.username == username && value.password == password)) {
                localStorage.setItem("user", `{"username":"${username}","password":"${password}"}`);
                callBack("dashboard");
            } else {
                error("Error, usuario o contraseña incorrecta.");
            }
        }).catch((err) => {
            console.error(err);
            error("Error del servidor, intente mas tarde.");
        })
}