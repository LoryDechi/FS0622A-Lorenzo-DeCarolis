import { Component, OnInit } from '@angular/core';
import { Movie } from './movie.interface';
import { MoviesService } from './movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies: Movie[] = [];

  constructor(private movieSrv: MoviesService) { }

  ngOnInit(): void {
    this.movieSrv.getMovies().subscribe((res) => {
      this.movies = res
      console.log(this.movies);
    })
  }

  addFav(idM: number, i: number) {
    const newFav = this.movieSrv.addFavorite(idM)
    // this.movies[i] = { ...this.movies[i], favId: newFav.id }
  }

  //   removeFav(idF: number, i: number) {
  //     this.movieSrv.removeFavorite(idF)
  //     this.movies[i] = { ...this.movies[i], favId: undefined }
  //   }
}
