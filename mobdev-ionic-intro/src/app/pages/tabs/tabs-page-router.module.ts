import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
const routes: Routes = [
{
path: 'tabs',
component: TabsPage,
children: [
{
path: 'films',
children: [
{
path: '',
loadChildren: () => import('../films/films.module').then( m => m.FilmsPageModule)
},
{
path: ':id',
loadChildren: () => import('../film-details/film-details.module').then( m => m.FilmDetailsPageModule)
}
]
},
{
path: 'people',
children: [
{
path: '',
loadChildren: () => import('../people/people.module').then( m => m.PeoplePageModule)
}