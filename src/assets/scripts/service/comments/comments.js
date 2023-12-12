import { environment } from "../../../../evironment/env.js";

export function addComment(comment) {
   const user =  localStorage.getItem("user");
    fetch(`${environment.urlAPI}/comments`, {
        method: "POST",
        headers: {
            'Content-type': "application/json",
        },
        body:JSON.stringify({"username":JSON.parse(user)["username"],"comment":comment})
    }).then((res) => res.json())
        .then((response) => {
            console.log(response);
       }).catch((err) => {
            console.error(err);
        })
}