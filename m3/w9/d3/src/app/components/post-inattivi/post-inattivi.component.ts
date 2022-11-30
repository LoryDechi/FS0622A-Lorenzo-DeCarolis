import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.interface';
import { getPosts, updatePosts } from 'src/app/service/posts.service';


@Component({
    selector: 'app-post-inattivi',
    templateUrl: './post-inattivi.component.html',
    styleUrls: ['./post-inattivi.component.scss']
})
export class PostInattiviComponent implements OnInit {

    posts: Post[] = []

    constructor() { }

    ngOnInit(): void {
        let get = getPosts();
        this.posts = get
    }

    attivaPost(id: number, i: number) {
        updatePosts({ active: true }, id)
        this.posts.splice(i, 1)
    }
}
