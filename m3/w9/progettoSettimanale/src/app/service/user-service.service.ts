import { User } from "../models/user.interface";

let users: User[] = [];
let userChild: User[] = [];

// fetch che alla chiamata scarica gli utenti dal json e li inserisce in un array pronto da essere restituito
export function fetchUser() {
    fetch('http://localhost:3000/users').then(res => res.json()).then(res => {
        users = res;
    });
}

// funzione che permette di restituire e spostare nei component l'array pieno di users
export function getUsers() {
    return users;
}

// funzione per filtrare il corretto user in base all'id ricevuto dall'url sul quale hai cliccato
export function userId(id: number) {
    // trovo l'indice dell'user nel array locale
    let indiceUser = users.findIndex((user) => {
        return user.id == id;
    });
    // svuoto l'array di appoggio dall'eventuale user precedente
    userChild = [];
    // pusho il nuovo user nell'array di appogio pronto da essere inviato al child component
    return userChild.push(users[indiceUser])
}

// funzione che permette di restituire e spostare nei component l'array con l'user filtrato
export function sendUser() {
    return userChild;
}
