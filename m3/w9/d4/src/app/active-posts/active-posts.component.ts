import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { getPosts, disattivaPost, fetchPost, cancellaPost } from '../post-service.service';

@Component({
    selector: 'app-active-posts',
    templateUrl: './active-posts.component.html',
    styleUrls: ['./active-posts.component.scss']
})
export class ActivePostsComponent implements OnInit {


    posts: Post[] = []


    constructor() { }

    ngOnInit(): void {
        fetchPost();
        let get = getPosts();
        this.posts = get;

    }

    disattiva(id: number) {
        disattivaPost(id);
    }

    cancella(id: number) {
        cancellaPost(id);
    }


}
