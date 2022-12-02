import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.interface';
import { fetchPost } from 'src/app/service/post-service.service';
import { fetchUser, getUsers } from 'src/app/service/user-service.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

    users: User[] = []

    constructor() { }

    ngOnInit(): void {
        fetchPost();
        fetchUser();
        let get = getUsers();
        this.users = get;
    }
}
