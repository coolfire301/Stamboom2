import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { NgFamilyTreeModule } from 'ng-family-tree';
import { AppRoutingModule } from './app-routing.module';
import { StamboomComponent } from '../stamboom/stamboom.component';
import { VoorpaginaComponent } from '../voorpagina/voorpagina.component';
import { ProgrammaComponent } from '../programma/programma.component';
import { StamboomAanvullenComponent } from '../stamboom-aanvullen/stamboom-aanvullen.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    StamboomComponent,
    VoorpaginaComponent,
    ProgrammaComponent,
    StamboomAanvullenComponent
  ],
  imports: [
    BrowserModule,
    NgFamilyTreeModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
