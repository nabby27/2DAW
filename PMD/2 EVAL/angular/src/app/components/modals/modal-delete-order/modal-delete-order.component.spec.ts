import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeleteOrderComponent } from './modal-delete-order.component';

describe('ModalDeleteOrderComponent', () => {
  let component: ModalDeleteOrderComponent;
  let fixture: ComponentFixture<ModalDeleteOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDeleteOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDeleteOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
