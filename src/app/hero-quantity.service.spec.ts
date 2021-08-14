import { TestBed } from '@angular/core/testing';

import { HeroQuantityService } from './hero-quantity.service';

describe('HeroQuantityService', () => {
  let service: HeroQuantityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroQuantityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
