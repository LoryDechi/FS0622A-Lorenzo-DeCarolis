import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { getPosts, attivaPost, fetchPost, cancellaPost } from '../post-service.service';

@Component({
    selector: 'app-inactive-posts',
    templateUrl: './inactive-posts.component.html',
    styleUrls: ['./inactive-posts.component.scss']
})
export class InactivePostsComponent implements OnInit {

    posts: Post[] = []


    constructor() { }

    ngOnInit(): void {
        fetchPost();
        let get = getPosts();
        this.posts = get;
    }

    attiva(id: number) {
        attivaPost(id);
    }

    cancella(id: number) {
        cancellaPost(id);
    }

}
