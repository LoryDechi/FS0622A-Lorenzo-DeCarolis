import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.interface';
import { getPosts, updatePosts } from 'src/app/service/posts.service';

@Component({
    selector: 'app-post-attivi',
    templateUrl: './post-attivi.component.html',
    styleUrls: ['./post-attivi.component.scss']
})
export class PostAttiviComponent implements OnInit {

    posts: Post[] = []

    constructor() { }

    ngOnInit(): void {
        let get = getPosts();
        this.posts = get;
    }

    disattivaPost(id: number, i: number) {
        updatePosts({ active: false }, id)
        this.posts.splice(i, 1)
    }

}
