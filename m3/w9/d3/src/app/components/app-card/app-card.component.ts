import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/models/post.interface';

@Component({
    selector: 'app-app-card',
    templateUrl: './app-card.component.html',
    styleUrls: ['./app-card.component.scss']
})
export class AppCardComponent implements OnInit {

    @Input() post!: Post;
    constructor() { }

    ngOnInit(): void {
    }

}
