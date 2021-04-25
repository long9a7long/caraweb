/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProductCustomService } from './product-custom.service';

describe('Service: ProductCustom', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductCustomService]
    });
  });

  it('should ...', inject([ProductCustomService], (service: ProductCustomService) => {
    expect(service).toBeTruthy();
  }));
});
