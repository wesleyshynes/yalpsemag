import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameBootstrapComponent } from './game-bootstrap/game-bootstrap.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'game-1', component: GameBootstrapComponent, data: { title: 'Game Bootstrap' } },
  { path: '', component: HomeComponent, data: { title: 'Home' } },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
