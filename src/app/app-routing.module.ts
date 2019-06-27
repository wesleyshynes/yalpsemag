import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameBootstrapComponent } from './game-bootstrap/game-bootstrap.component';

const routes: Routes = [
  { path: 'game-1', component: GameBootstrapComponent, data: { title: 'Game Bootstrap' } },
  { path: '', redirectTo: '/game-1', pathMatch: 'full' },
  { path: '**', component: GameBootstrapComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
