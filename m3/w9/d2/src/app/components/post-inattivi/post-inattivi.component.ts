import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.interface';
import { getPostFiltered } from 'src/app/service/posts.service';


@Component({
    selector: 'app-post-inattivi',
    templateUrl: './post-inattivi.component.html',
    styleUrls: ['./post-inattivi.component.scss']
})
export class PostInattiviComponent implements OnInit {
    posts: Post[] = []

    constructor() { }

    ngOnInit(): void {
        this.posts = []
        let t = getPostFiltered(false)
        t.then((res) => {
            this.posts = res
        })
    }

}
