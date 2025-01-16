import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewsPrincipalComponent} from "./modules/news/componets/news-principal/news-principal.component";

const routes: Routes = [
  {path: '', component: NewsPrincipalComponent},
  {path: '*', component: NewsPrincipalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
