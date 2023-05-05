import { Component, OnInit } from '@angular/core';
import { Family } from '../../../ng-family-tree/src/lib/models/family.model';
import { TreeNode } from '../../../ng-family-tree/src/lib/models/node.model';

@Component({
  selector: 'app-stamboom',
template: `
    <ft-tree (onLeafSelected)="onLeafSelected($event)" [family]="family"></ft-tree>
  `,
  styleUrls: ['./stamboom.component.scss']
})
export class StamboomComponent implements OnInit{
  title = 'demo';

  onLeafSelected(data) {
    console.log(data);
  }

  family = {
    nodes: [
      { name: 'Opa'},
      { name: 'Oma'}
      ],
    children: [{
      nodes: [
        { name: 'Hein', relationship: 'self' },
      ],
      children: [
        { nodes: [{ name: 'Marianne'}], children : [{nodes: [{ name: 'kak'}]}] },
        { nodes: [{ name: 'Timo'}] },
        { nodes: [{ name: 'Anouk'}] }
        ],
    }, 
    
    
    
    
    {
    nodes: [
      { name: 'Roelof', relationship: 'self' },
    ],
    children: [
      { nodes: [{ name: 'Jasper'}] },
      { nodes: [{ name: 'Bart'}] },
      ]}
  
  
  
  ]
  };

  ngOnInit() {
  }
}

