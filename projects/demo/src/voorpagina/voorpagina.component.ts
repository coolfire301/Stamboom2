import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-voorpagina',
  templateUrl: './voorpagina.component.html',
  styleUrls: ['./voorpagina.component.scss']
})
export class VoorpaginaComponent {

  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('Familiedag 2023.nl');
  }

}
