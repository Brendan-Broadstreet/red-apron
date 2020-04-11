import { TestBed } from '@angular/core/testing';

import { FavlistService } from './favlist.service';

describe('FavlistService', () => {
  let service: FavlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
