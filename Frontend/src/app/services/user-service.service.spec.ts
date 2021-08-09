import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { UserServiceService } from './user-service.service';

describe('UserServiceService', () => {
  let service: UserServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule, RouterTestingModule]
    });
    service = TestBed.inject(UserServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
