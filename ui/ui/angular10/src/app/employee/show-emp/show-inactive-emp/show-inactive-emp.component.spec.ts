import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowInactiveEmpComponent } from './show-inactive-emp.component';

describe('ShowInactiveEmpComponent', () => {
  let component: ShowInactiveEmpComponent;
  let fixture: ComponentFixture<ShowInactiveEmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowInactiveEmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowInactiveEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
