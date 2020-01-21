import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CyclesComponent } from './cycles.component';

describe('CyclesComponent', () => {
  let component: CyclesComponent;
  let fixture: ComponentFixture<CyclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CyclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CyclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
