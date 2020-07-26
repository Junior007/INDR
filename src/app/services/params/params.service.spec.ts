/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ParamsService } from './params.service';

describe('Service: ParamsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParamsService]
    });
  });

  it('should ...', inject([ParamsService], (service: ParamsService) => {
    expect(service).toBeTruthy();
  }));
});
