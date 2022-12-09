import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../movies/movie.interface';
import { MoviesService } from '../movies/movies.service';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
  styleUrls: ['./dettaglio.component.scss']
})
export class DettaglioComponent implements OnInit {

  movie: any;
  id: number = 0;

  constructor(private route: ActivatedRoute, private movieSrv: MoviesService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let idString = params.get("id");
      // inserito parseFloat per trasformare da stringa a numero il valore ottenuto dalla route
      this.id = parseFloat(idString!);
      // passo i valori alla funzione nel service per filtrare il film giusto in base all'id
      this.movieSrv.dettaglio(this.id).subscribe(res => {
        this.movie = res;
        console.log(this.movie);

      });
    });
  }

}
