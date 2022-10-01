import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDeliveredCustomerComponent } from './show-delivered-customer.component';

describe('ShowDeliveredCustomerComponent', () => {
  let component: ShowDeliveredCustomerComponent;
  let fixture: ComponentFixture<ShowDeliveredCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDeliveredCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDeliveredCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
