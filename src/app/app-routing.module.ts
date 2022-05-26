import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NegozioComponent } from './negozio/negozio.component';

const routes: Routes = [
  { path: '', redirectTo: '/negozio', pathMatch: 'full'},
  { path: 'negozio', component: NegozioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
