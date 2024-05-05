import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesComponent } from './favorites/favorites.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: 'favorites' , component:FavoritesComponent },
  { path: 'Dashboard' , component:AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
