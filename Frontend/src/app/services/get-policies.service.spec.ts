import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { PolicyReceive } from '../model/policy';
import { GetPoliciesService } from './get-policies.service';

describe('GetPoliciesService', () => {
  let service: GetPoliciesService;
  let httpClientSpy: {get: jasmine.Spy, post: jasmine.Spy, put: jasmine.Spy, delete: jasmine.Spy};
  let policyService: GetPoliciesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule, RouterTestingModule],
      providers: [GetPoliciesService]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put', 'delete']);
    policyService = new GetPoliciesService(httpClientSpy as any)
    service = TestBed.inject(GetPoliciesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  //test for getting policy list
  it('should return list of all policies', (done: DoneFn) => {
    let mockPolicies: PolicyReceive[] = [
    {
      id: 16,
      policyType: "Term Insurance Plan",
      coverName: "UHGTERM",
      premium: "9454",
      sumInsured: "4052045",
      coverUpto: "59",
      description: "describing this policy",
      termsConditions: "TCApplied",
      email: "vatsalgrwl@gmail.com",
      userId: "6"
  },
  {
      id: 18,
      policyType: "Health Mediclaim",
      coverName: "UHG Mediclaim",
      premium: "8214",
      sumInsured: "10000000",
      coverUpto: "59",
      description: "UHG",
      termsConditions: "UHG",
      email: "vatsalgrwl@gmail.com",
      userId: "6"
  }
    ];

    httpClientSpy.get.and.returnValue(of(mockPolicies));

    policyService.getPolicies().subscribe(
      policies => {
        expect(policies).toEqual(mockPolicies, 'expected policies');
        done();
      },
      done.fail
    );

    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');

    // service.getPolicies().subscribe(value => {
    //   expect(value).toBe(mockPolicies);
    // })
  })


  it('give detail of selected policy', (done: DoneFn) => {
    let policyDetail = {
      id: 18,
      policyType: "Health Mediclaim",
      coverName: "UHG Mediclaim",
      premium: "8214",
      sumInsured: "10000000",
      coverUpto: "59",
      description: "UHG",
      termsConditions: "UHG",
      email: "vatsalgrwl@gmail.com",
      userId: "6"
  }


  httpClientSpy.get.and.returnValue(of(policyDetail));

  policyService.getPolicyDetail("18").subscribe(
    policies => {
      expect(policies).toEqual(policyDetail, 'expected policies');
      done();
    },
    done.fail
  );

  expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');  

  })


  //test case for getting list of policies of payer
  it('policy list of particular payer', (done: DoneFn) => {
    let policyList = [
      {
          id: 16,
          policyType: "Term Insurance Plan",
          coverName: "UHGTERM",
          premium: "9454",
          sumInsured: "4052045",
          coverUpto: "59",
          description: "describing this policy",
          termsConditions: "TCApplied",
          email: "vatsalgrwl@gmail.com",
          userId: "6"
      },
      {
          id: 18,
          policyType: "Health Mediclaim",
          coverName: "UHG Mediclaim",
          premium: "8214",
          sumInsured: "10000000",
          coverUpto: "59",
          description: "UHG",
          termsConditions: "UHG",
          email: "vatsalgrwl@gmail.com",
          userId: "6"
      },
      {
          id: 27,
          policyType: "Personal Plan",
          coverName: "Personal Plan",
          premium: "1999",
          sumInsured: "19934923",
          coverUpto: "59",
          description: "PC",
          termsConditions: "PC",
          email: "vatsalgrwl@gmail.com",
          userId: "6"
      }
  ]

  httpClientSpy.get.and.returnValue(of(policyList));

  policyService.getPayerPolicy("6").subscribe(
    policies => {
      expect(policies).toEqual(policyList, 'expected policies');
      done();
    },
    done.fail
  );

  expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');

  })

  //testing for getting customer policies
  it('policy list of particular customer', (done: DoneFn) => {
    let policyList = [
      {
          id: 16,
          policyType: "Term Insurance Plan",
          coverName: "UHGTERM",
          premium: "9454",
          sumInsured: "4052045",
          coverUpto: "59",
          description: "describing this policy",
          termsConditions: "TCApplied",
          email: "vatsalgrwl@gmail.com",
          userId: "6"
      },
      {
          id: 18,
          policyType: "Health Mediclaim",
          coverName: "UHG Mediclaim",
          premium: "8214",
          sumInsured: "10000000",
          coverUpto: "59",
          description: "UHG",
          termsConditions: "UHG",
          email: "vatsalgrwl@gmail.com",
          userId: "6"
      },
      {
          id: 27,
          policyType: "Personal Plan",
          coverName: "Personal Plan",
          premium: "1999",
          sumInsured: "19934923",
          coverUpto: "59",
          description: "PC",
          termsConditions: "PC",
          email: "vatsalgrwl@gmail.com",
          userId: "6"
      }
  ]

  httpClientSpy.get.and.returnValue(of(policyList));

  policyService.getMyPolicies("6").subscribe(
    policies => {
      expect(policies).toEqual(policyList, 'expected policies');
      done();
    },
    done.fail
  );

  expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');

  })


  // it('should return an error when the server returns a 404', (done:DoneFn) => {
  //   const errorResponse = new HttpErrorResponse({
  //     error: 'test 404 error',
  //     status: 404, statusText: 'Not Found'
  //   });

  //   httpClientSpy.get.and.returnValue(of(errorResponse));

  //   policyService.getPolicies().subscribe(
  //     policies => done.fail('expected an error, not policies'),
  //     error => {
  //       expect(error.message).toContain('test 404 error');
  //       done();
  //     }
  //   )
  // })


  it('add a new policy', (done : DoneFn) => {
    let newPolicy = "id 19 policyType Health Mediclaim coverName UHG Mediclaim premium 8214 sumInsured 10000000 coverUpto 59 description UHG termsConditions UHG email vatsalgrwl@gmail.com userId 6"

    let responsePolicy = {
      "id": 19,
      "policyType": "Health Mediclaim",
      "coverName": "UHG Mediclaim",
      "premium": "8214",
      "sumInsured": "10000000",
      "coverUpto": "59",
      "description": "UHG",
      "termsConditions": "UHG",
      "email": "vatsalgrwl@gmail.com",
      "userId": "6"
  }

  httpClientSpy.post.and.returnValue(of(responsePolicy));

  policyService.addPolicy(newPolicy).subscribe(
    policies => {
      expect(policies).toEqual(responsePolicy, 'expected policies');
      done();
    },
    done.fail
  );

  expect(httpClientSpy.post.calls.count()).toBe(1, 'one call');

    // service.addPolicy(newPolicy).subscribe(value => {
    //   expect(value).toBe(responsePolicy);
    // })
  })


  it('buy a policy', (done: DoneFn) => {
    let buyPolicy = "id 18 policyType Health Mediclaim coverName UHG Mediclaim premium 8214 sumInsured 10000000 coverUpto 59 description UHG termsConditions UHG email vatsalgrwl@gmail.com userId 6"

    let responsePolicy = {
      "id": 18,
      "policyType": "Health Mediclaim",
      "coverName": "UHG Mediclaim",
      "premium": "8214",
      "sumInsured": "10000000",
      "coverUpto": "59",
      "description": "UHG",
      "termsConditions": "UHG",
      "email": "vatsalgrwl@gmail.com",
      "userId": "6"
  }


  httpClientSpy.post.and.returnValue(of(responsePolicy));

  policyService.buyPolicy(buyPolicy).subscribe(
    policies => {
      expect(policies).toEqual(responsePolicy, 'expected policies');
      done();
    },
    done.fail
  );

  expect(httpClientSpy.post.calls.count()).toBe(1, 'one call');  
    // service.buyPolicy(buyPolicy).subscribe(value => {
    //   expect(value).toBe(responsePolicy);
    // })
  })


  it('update a new policy', (done:DoneFn) => {

    let updatedPolicy = {
      "id": 18,
      "policyType": "Health Medi",
      "coverName": "UHG Mediclaim",
      "premium": "8214",
      "sumInsured": "10000000",
      "coverUpto": "59",
      "description": "UHG",
      "termsConditions": "UHG",
      "email": "vatsalgrwl@gmail.com",
      "userId": "6"
  }

  httpClientSpy.put.and.returnValue(of(updatedPolicy));

  policyService.updatePolicy(updatedPolicy).subscribe(
    policies => {
      expect(policies).toEqual(updatedPolicy, 'expected policies');
      done();
    },
    done.fail
  );

  expect(httpClientSpy.put.calls.count()).toBe(1, 'one call');  


    // service.updatePolicy(updatedPolicy).subscribe(value => {
    //   expect(value).toBe(updatedPolicy);
    // })
  })


  it('delete a policy', (done: DoneFn) => {
    let deletePolicy = {
      "id": 18,
      "policyType": "Health Medi",
      "coverName": "UHG Mediclaim",
      "premium": "8214",
      "sumInsured": "10000000",
      "coverUpto": "59",
      "description": "UHG",
      "termsConditions": "UHG",
      "email": "vatsalgrwl@gmail.com",
      "userId": "6"
  }

  httpClientSpy.delete.and.returnValue(of(deletePolicy));

  policyService.deletePolicy(18).subscribe(
    policies => {
      expect(policies).toEqual(deletePolicy, 'expected policies');
      done();
    },
    done.fail
  );

  expect(httpClientSpy.delete.calls.count()).toBe(1, 'one call');  

  //   service.deletePolicy(18).subscribe(value => {
  //     expect(value).toBe(deletePolicy);
  //   })
  })
});