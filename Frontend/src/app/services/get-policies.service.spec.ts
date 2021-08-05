import { TestBed } from '@angular/core/testing';

import { GetPoliciesService } from './get-policies.service';

describe('GetPoliciesService', () => {
  let service: GetPoliciesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPoliciesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
