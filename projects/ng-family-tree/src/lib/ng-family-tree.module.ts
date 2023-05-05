import { NgModule } from '@angular/core';
import { NgFamilyTreeComponent } from './ng-family-tree/ng-family-tree.component';
import { FtLeafComponent } from './ng-family-tree/ft-leaf.component';
import { CommonModule } from '@angular/common';
import { StamboomComponent } from './stamboom/stamboom.component';
import { StamboomVullenComponent } from './stamboom-vullen/stamboom-vullen.component';

@NgModule({
  declarations: [NgFamilyTreeComponent, FtLeafComponent, StamboomComponent, StamboomVullenComponent],
  imports: [
    CommonModule,
  ],
  exports: [NgFamilyTreeComponent]
})
export class NgFamilyTreeModule { }
