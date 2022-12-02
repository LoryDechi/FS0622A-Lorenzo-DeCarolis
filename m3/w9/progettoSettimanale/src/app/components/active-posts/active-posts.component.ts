import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.interface';
import { fetchUser } from 'src/app/service/user-service.service';
import { getPosts, fetchPost, cancellaPost, updatePost, dettaglio } from '../../service/post-service.service';


@Component({
    selector: 'app-active-posts',
    templateUrl: './active-posts.component.html',
    styleUrls: ['./active-posts.component.scss']
})
export class ActivePostsComponent implements OnInit {

    posts: Post[] = []


    constructor() { }

    ngOnInit(): void {
        // chiamata fetch user cosi da rendere sempore disponibile la pagina user
        fetchUser();
        fetchPost();
        // chiamo la funzione nel service che mi restituisce l'array di post
        let get = getPosts();
        this.posts = get;
    }

    // funzione dissattiva il post cambiando il type, aggiorna il json ed elimina dall'elenco il post disattivato
    disattiva(id: number, i: number) {
        updatePost(id);
        this.posts.splice(i, 1);
    }

    // funzione che elimina il post, aggiorna il json ed elimina dall'elenco il post
    cancella(id: number, i: number) {
        cancellaPost(id);
        this.posts.splice(i, 1);
    }
}
