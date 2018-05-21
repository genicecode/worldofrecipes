import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImpressumComponent } from './impressum/impressum.component';
import { GeschichteComponent } from './geschichte/geschichte.component';
import { FeloferieComponent } from './feloferie/feloferie.component';
import { EntdeckenComponent } from './entdecken/entdecken.component';
import { KontinenteComponent } from './kontinente/kontinente.component';

const routes: Routes = [
  { path: '', component:EntdeckenComponent},
  { path: 'impressum', component: ImpressumComponent },
  { path: 'geschichte', component: GeschichteComponent},
  { path: 'feloferie', component:FeloferieComponent},
  { path: 'entdecken', component:EntdeckenComponent},
  { path: 'kontinente', component:KontinenteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
