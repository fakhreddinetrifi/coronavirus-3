import { TestBed } from '@angular/core/testing';

import { CoronaServService } from './corona-serv.service';

describe('CoronaServService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoronaServService = TestBed.get(CoronaServService);
    expect(service).toBeTruthy();
  });
});
