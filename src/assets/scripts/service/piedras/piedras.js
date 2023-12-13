import { environment } from "../../../../evironment/env.js";

export  async function getAllPiedras() {
    const res = await fetch(`${environment.urlAPI}/piedras`, {
        method: "GET",
        headers: {
            'Content-type': "application/json",
        }
    });
    const response = await res.json();

    return response;
}