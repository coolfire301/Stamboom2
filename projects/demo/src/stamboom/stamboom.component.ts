import { Component, OnInit, OnDestroy } from '@angular/core';
import { Family } from '../../../ng-family-tree/src/lib/models/family.model';
import { TreeNode } from '../../../ng-family-tree/src/lib/models/node.model';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../app/app.component';
import { Title } from '@angular/platform-browser';
import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-stamboom',
  template: `
    <ft-tree (onLeafSelected)="onLeafSelected($event)" [family]="family"></ft-tree>
  `,
  styleUrls: ['./stamboom.component.scss']
})
export class StamboomComponent implements OnInit, OnDestroy {
  title = 'Stamboom Familie de Graaf';
  family: any;

  readonly ROOT_URL_familie: string;
  private destroy$ = new Subject<void>();

  constructor(
    private http: HttpClient,
    private appComponent: AppComponent,
    private titleService: Title
  ) {
    this.ROOT_URL_familie = this.appComponent.apiUrl + '/familie';
  }

  onLeafSelected(data) {
    console.log(data);
  }

  ngOnInit() {
    this.titleService.setTitle('Stamboom Familie de Graaf');
    this.fetchData();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private fetchData() {
    interval(1000)
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        this.http.get(this.ROOT_URL_familie)
          .toPromise()
          .then(data => {
            this.family = data;
          });
      });
  }
}
