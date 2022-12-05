import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Foto } from 'src/app/modules/foto.interface';
import { FotoServiceService } from 'src/app/services/foto-service.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    sub!: Subscription;
    foto: Foto[] | undefined;
    count: number = 0;
    status: string = '';

    constructor(private http: HttpClient, private fotoSrv: FotoServiceService) {

    }

    ngOnInit(): void {
        this.sub = this.fotoSrv.recuperaFoto().pipe(map(ris => ris.data)).subscribe((ris) => {
            this.foto = ris;
            console.log(this.foto);
        })
    }

    miPiace() {
        return this.count++
    }

    cancella(id: number) {
        this.sub = this.fotoSrv.deleteFoto(id).subscribe(() => {
            this.foto = this.foto?.filter((f) => f.id != id);
            console.log(`Utente ${id} cancellato!`);
        })
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe;
    }

}
