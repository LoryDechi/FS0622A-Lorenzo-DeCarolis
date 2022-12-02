import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post.interface';
import { dettaglio, fetchPost, getDettaglio } from 'src/app/service/post-service.service';
import { fetchUser } from 'src/app/service/user-service.service';

@Component({
    selector: 'app-dettaglio',
    templateUrl: './dettaglio.component.html',
    styleUrls: ['./dettaglio.component.scss']
})
export class DettaglioComponent implements OnInit {

    det: Post[] = [];
    id: number = 0;

    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        // funzione che resta in ascolto della route e al cambiamento dei parametri aggiorna la pagina dettaglio con il post ottenuto dall'id
        this.route.paramMap.subscribe(params => {
            let idString = params.get("id");
            // inserito parseFloat per trasformare da stringa a numero il valore ottenuto dalla route
            this.id = parseFloat(idString!);
            // chiamata fetch user cosi da rendere sempore disponibile la pagina user
            fetchUser();
            fetchPost();
            // passo i valori alla funzione nel service per filtrare il post giusto in base all'id
            dettaglio(this.id);
            // ottengo il post e lo inserisco in un array
            let get = getDettaglio();
            this.det = get;
        });

    }

}
