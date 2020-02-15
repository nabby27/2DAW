import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalLineOfOrderComponent } from './modal-line-of-order.component';

describe('ModalLineOfOrderComponent', () => {
  let component: ModalLineOfOrderComponent;
  let fixture: ComponentFixture<ModalLineOfOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalLineOfOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalLineOfOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
