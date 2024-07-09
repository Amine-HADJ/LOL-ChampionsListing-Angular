import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChampionsListComponent } from './champions-list.component';
import { DeleteChampionComponent } from './delete-champion.component';

const routes: Routes = [
  { path: 'champions', component: ChampionsListComponent },
  { path: 'delete-champion', component: DeleteChampionComponent },
  { path: '', redirectTo: '/champions', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }