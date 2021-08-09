import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HousingService } from './housing.service';

describe('HousingService', () => {
  let service: HousingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule, RouterTestingModule]
    });
    service = TestBed.inject(HousingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
