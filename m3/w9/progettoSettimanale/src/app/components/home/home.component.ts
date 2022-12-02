import { Component, OnInit } from '@angular/core';
import { fetchPost } from 'src/app/service/post-service.service';
import { fetchUser } from 'src/app/service/user-service.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
        // chiamate fetch cosi da rendere sempre disponibili le pagine
        fetchPost();
        fetchUser();
    }

}
