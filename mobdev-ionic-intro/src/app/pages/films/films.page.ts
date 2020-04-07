import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../services/api.service';

@Component({
selector: 'app-films',
templateUrl: './films.page.html',
styleUrls: ['./films.page.scss'],
})
export class FilmsPage implements OnInit {

  films: Observable<any>;
 
  constructor(private router: Router, private api: ApiService) { }
 
  ngOnInit() {
    this.films = this.api.getFilms();
  }
 
  openDetails(film) {
    let split = film.url.split('/');
    let filmId = split[split.length-2];
    this.router.navigateByUrl(`/tabs/films/${filmId}`);
  }
}
/*openDetails() {
// Both of these would work!
// But the standard Router is recommended.
//this.navController.navigateForward(`/tabs/films/42`);
this.router.navigateByUrl(`/tabs/films/42`);
}
goToPlanets() {
this.navController.navigateRoot(`/tabs/planets`)
}*/
  

