import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularQAComponent } from './angular-qa.component';

describe('AngularQAComponent', () => {
  let component: AngularQAComponent;
  let fixture: ComponentFixture<AngularQAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularQAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularQAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
