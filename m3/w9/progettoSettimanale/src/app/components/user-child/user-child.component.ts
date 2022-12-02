import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.interface';
import { sendUser, userId } from 'src/app/service/user-service.service';

@Component({
    selector: 'app-user-child',
    templateUrl: './user-child.component.html',
    styleUrls: ['./user-child.component.scss']
})
export class UserChildComponent implements OnInit {

    users: User[] = [];
    id: number = 0;
    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        // funzione che resta in ascolto della route e al cambiamento dei parametri aggiorna la routeChild con i nuovi valori che ottiene dall'id
        this.route.paramMap.subscribe(params => {
            let idString = params.get("id");
            // inserito parseFloat per trasformare da stringa a numero il valore ottenuto dalla route
            this.id = parseFloat(idString!);
            // passo i valori alla funzione nel service per filtrare l'user giusto in base all'id
            userId(this.id);
            // ottengo l'user e lo inserisco in un array
            let get = sendUser();
            this.users = get;
        });
    }

}
