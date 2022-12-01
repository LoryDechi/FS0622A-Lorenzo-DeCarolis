import { Injectable } from '@angular/core';
import { Post } from './post';

var posts: Post[] = [];

export function fetchPost() {
    fetch('http://localhost:3000/posts').then(res => res.json()).then((res: Post[]) => {
        posts = res;
    });
}

export function getPosts() {
    return posts;
}

export function disattivaPost(id: number) {
    let newPost = posts.findIndex((post) => {
        return post.id == id;
    });

    posts[newPost].active = false;

    fetch('http://localhost:3000/posts/' + id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(posts[newPost])
    });
}

export function attivaPost(id: number) {
    let newPost = posts.findIndex((post) => {
        return post.id == id;
    });

    posts[newPost].active = true;

    fetch('http://localhost:3000/posts/' + id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(posts[newPost])
    });
}

export function cancellaPost(id: number) {
    let alert = `Sei sicuro? l'operazione è irreversibile!`;
    if (confirm(alert) == true) {
        fetch('http://localhost:3000/posts/' + id, {
            method: 'DELETE',
        });
    }
}

