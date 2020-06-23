import { TestBed } from '@angular/core/testing';

import { ApiInterceptionService } from './api-interception.service';

describe('ApiInterceptionService', () => {
  let service: ApiInterceptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiInterceptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
