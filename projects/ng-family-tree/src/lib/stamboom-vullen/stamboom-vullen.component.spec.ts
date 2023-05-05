import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StamboomVullenComponent } from './stamboom-vullen.component';

describe('StamboomVullenComponent', () => {
  let component: StamboomVullenComponent;
  let fixture: ComponentFixture<StamboomVullenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StamboomVullenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StamboomVullenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
