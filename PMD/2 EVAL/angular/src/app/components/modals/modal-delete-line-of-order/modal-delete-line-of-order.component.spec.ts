import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeleteLineOfOrderComponent } from './modal-delete-line-of-order.component';

describe('ModalDeleteLineOfOrderComponent', () => {
  let component: ModalDeleteLineOfOrderComponent;
  let fixture: ComponentFixture<ModalDeleteLineOfOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDeleteLineOfOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDeleteLineOfOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
