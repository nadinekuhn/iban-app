import { TestBed } from '@angular/core/testing';

import { IbanService } from './iban.service';

describe('IbanService', () => {
  let service: IbanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IbanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
