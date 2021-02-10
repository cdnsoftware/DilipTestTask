import { TestBed } from '@angular/core/testing';

import { FrequencyService } from './frequency.service';

describe('FrequencyService', () => {
  let service: FrequencyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrequencyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`should return result when 'calculateHighestFrequency' function is called`, () => {
    expect(service.calculateHighestFrequency('The sun shines over the lake')).toEqual(2);
  });

  it(`should return frequency when 'getFrequency' function is called`, () => {
    expect(service.getFrequency('The sun shines over the lake', 'the')).toEqual(2);
  });

  it(`should return result when 'getWord' function is called`, () => {
    expect(service.getWord(['The', 'sun', 'shines', 'over', 'the', 'lake'])).toEqual('the');
  });
});
