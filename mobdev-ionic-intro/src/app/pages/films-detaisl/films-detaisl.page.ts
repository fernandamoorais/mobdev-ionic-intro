import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './../../services/api.service';
import { FavouriteService } from './../../services/favourite.service';

@Component({
selector: 'app-film-details',
templateUrl: './film-details.page.html',
styleUrls: ['./film-details.page.scss'],
})
export class FilmDetailsPage implements OnInit {
    
    film: any;
    isFavourite = false;
    filmId = null;
  constructor(private activatedRoute: ActivatedRoute, private api: ApiService,private favouriteService: FavouriteService) { }
 
  ngOnInit() {
     this.filmId = this.activatedRoute.snapshot.paramMap.get('id');
     this.api.getFilm(this.filmId).subscribe(res => {
  	 this.film = res;
    //let id = this.activatedRoute.snapshot.paramMap.get('id');
   // this.api.getFilm(id).subscribe(res => {
     });
       this.favouriteService.isFavourite(this.filmId).then(isFav => {
      this.isFavourite = isFav;
    });
  }
 //hg
  favouriteFilm() {
    this.favouriteService.favouriteFilm(this.filmId).then(() => {
      this.isFavourite = true;
    });
  }
 
  unfavouriteFilm() {
    this.favouriteService.unfavouriteFilm(this.filmId).then(() => {
      this.isFavourite = false;
    });
}
}
