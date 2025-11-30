import { TestBed } from '@angular/core/testing';

import { FoodCatalogueService } from './food-catalogue.service';

describe('FoodCatalogueService', () => {
  let service: FoodCatalogueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodCatalogueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
