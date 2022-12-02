import { Post } from "../models/post.interface";

var posts: Post[] = [];
var det: Post[] = [];

// fetch che alla chiamata scarica i post dal json e li inserisce in un array pronto da essere restituito
export function fetchPost() {
    fetch('http://localhost:3000/posts').then(res => res.json()).then((res: Post[]) => {
        posts = res;
    });
}

// funzione che permette di restituire e spostare nei component l'array pieno di post
export function getPosts() {
    return posts;
}

// funzione che cambia lo stato del post passando true a false cosi da renderlo attivo o inattivo
export function updatePost(id: number) {
    // trovo l'indice del post nel array locale
    let newPost = posts.findIndex((post) => {
        return post.id == id;
    });

    // cambio lo stato del post con il suo opposto
    posts[newPost].active = !posts[newPost].active;

    // effettuo la modifica sul json con il nuovo stato
    fetch('http://localhost:3000/posts/' + id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(posts[newPost])
    });
}

// funzione che permette di eliminare definitivamente un post grazie al suo id
export function cancellaPost(id: number) {
    fetch('http://localhost:3000/posts/' + id, {
        method: 'DELETE',
    });
}

// funzione che riceve l'id del post lo filtra e lo restituisce alla pagina dettaglio per essere mostrato
export function dettaglio(id: number) {
    // trovo l'indice del post nel array locale
    let detPost = posts.findIndex((post) => {
        return post.id == id;
    });
    // svuoto l'array di appoggio dall'eventuale post precedente
    det = [];
    // pusho il nuovo post nell'array di appogio pronto da essere inviato alla pagina dettaglio
    return det.push(posts[detPost])
}

// funzione che permette di restituire e spostare nei component l'array con il post filtrato
export function getDettaglio() {
    return det;
}

