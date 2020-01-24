import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CycleItemComponent } from './cycle-item.component';

describe('CycleItemComponent', () => {
  let component: CycleItemComponent;
  let fixture: ComponentFixture<CycleItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CycleItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CycleItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
