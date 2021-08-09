import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { GetPoliciesService } from './get-policies.service';

describe('GetPoliciesService', () => {
  let service: GetPoliciesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule, RouterTestingModule]
    });
    service = TestBed.inject(GetPoliciesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
