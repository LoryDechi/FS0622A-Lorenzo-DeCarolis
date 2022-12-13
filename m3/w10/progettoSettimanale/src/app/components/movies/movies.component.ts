import { Component, OnInit } from '@angular/core';
import { DashMovie, favMovie, Movie } from './movie.interface';
import { MoviesService } from './movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies!: Movie[]

  constructor(private movieSrv: MoviesService) { }

  ngOnInit(): void {
    this.movieSrv.getMovies().subscribe((res) => {
      this.movies = res
    })
  }
}
