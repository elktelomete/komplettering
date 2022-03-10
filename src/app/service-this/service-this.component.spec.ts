import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceThisComponent } from './service-this.component';

describe('ServiceThisComponent', () => {
  let component: ServiceThisComponent;
  let fixture: ComponentFixture<ServiceThisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceThisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceThisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
