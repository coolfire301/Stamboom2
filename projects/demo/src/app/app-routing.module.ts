import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StamboomComponent } from '../stamboom/stamboom.component';
import { VoorpaginaComponent } from '../voorpagina/voorpagina.component';
import { ProgrammaComponent } from '../programma/programma.component';
import { StamboomAanvullenComponent } from '../stamboom-aanvullen/stamboom-aanvullen.component';


const routes: Routes = [
  { path: 'stamboom', component: StamboomComponent},
  { path: 'voorpagina', component: VoorpaginaComponent },
  { path: 'programma', component: ProgrammaComponent },
  { path: 'stamboom_vullen', component: StamboomAanvullenComponent },
  { path: '', redirectTo: '/voorpagina', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [  RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
