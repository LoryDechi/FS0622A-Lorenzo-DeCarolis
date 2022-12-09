import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/auth/auth.service';
import { AuthResponse } from 'src/app/auth/auth-response.interface';
import { catchError, ReplaySubject } from 'rxjs';
import { favMovie, Movie } from './movie.interface';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  movies: Movie[] = [];
  dataSubj = new ReplaySubject<boolean>()
  dataObs = this.dataSubj.asObservable()

  constructor(private http: HttpClient, private authSrv: AuthService) { }

  getDataObs() {
    return this.dataObs
  }

  getMovies() {
    return this.http.get<Movie[]>('http://localhost:4201/api/movie/popular').pipe(catchError((err) => {
      this.dataSubj.next(false)
      throw new Error('GET fallita')
    }));
  }

  addFavorite(mId: number) {
    let takeUser: any = localStorage.getItem('user')
    let user = JSON.parse(takeUser)
    let uId = user.user.id

    let newFav: favMovie = {
      movieId: mId,
      userId: uId
    }


    return this.http.post<favMovie>('http://localhost:4201/favorites', newFav).pipe(catchError(err => {
      console.log(err);
      throw err
    }))


  }


}
