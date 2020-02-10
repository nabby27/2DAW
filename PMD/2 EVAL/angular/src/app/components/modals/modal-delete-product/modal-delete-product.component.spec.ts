import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeleteProductComponent } from './modal-delete-product.component';

describe('ModalDeleteProductComponent', () => {
  let component: ModalDeleteProductComponent;
  let fixture: ComponentFixture<ModalDeleteProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDeleteProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDeleteProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
