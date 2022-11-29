import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.interface';
import { getPostFiltered, getPosts } from 'src/app/service/posts.service';

@Component({
    selector: 'app-post-attivi',
    templateUrl: './post-attivi.component.html',
    styleUrls: ['./post-attivi.component.scss']
})
export class PostAttiviComponent implements OnInit {

    posts: Post[] = []

    constructor() { }

    ngOnInit(): void {
        this.posts = []
        let t = getPostFiltered(true)
        t.then((res) => {
            this.posts = res
        })
    }


}
