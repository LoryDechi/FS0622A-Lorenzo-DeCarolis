import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Foto } from '../modules/foto.interface';

@Injectable({
    providedIn: 'root'
})
export class FotoServiceService {

    constructor(private http: HttpClient) { }

    recuperaFoto() {
        return this.http.get<{ data: Foto[] }>('https://reqres.in/api/users')
    }

    deleteFoto(id: number) {
        return this.http.delete('https://reqres.in/api/users/' + id);
    }

}
