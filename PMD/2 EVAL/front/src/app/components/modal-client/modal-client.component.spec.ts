import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalClientComponent } from './modal-client.component';

describe('ModalClientComponent', () => {
  let component: ModalClientComponent;
  let fixture: ComponentFixture<ModalClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
