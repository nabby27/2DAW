import { TestBed } from '@angular/core/testing';

import { CyclesService } from './cycles.service';

describe('CyclesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CyclesService = TestBed.get(CyclesService);
    expect(service).toBeTruthy();
  });
});
