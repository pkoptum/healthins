import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { PolicyReceive } from '../model/policy';

import { GetPoliciesService } from './get-policies.service';

describe('GetPoliciesService', () => {
  let service: GetPoliciesService;
  let policyService: GetPoliciesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule, RouterTestingModule],
      providers: [GetPoliciesService]
    });
    service = TestBed.inject(GetPoliciesService);
    // policyService = new GetPoliciesService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });



  //test for getting policy list
  it('should return list of all policies', () => {
    let mockPolicies: PolicyReceive[] = [{
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

    service.getPolicies().subscribe(value => {
      expect(value).toBe(mockPolicies);
    })
  })


  it('give detail of selected policy', () => {
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

    service.getPolicyDetail("18").subscribe(value => {
      expect(value).toBe(policyDetail);
    })
  })


  //test case for getting list of policies of payer
  it('policy list of particular payer', () => {
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

  service.getPayerPolicy("6").subscribe(value => {
    expect(value).toBe(policyList)
  })

  })

  //testing for getting customer policies
  it('policy list of particular customer', () => {
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

  service.getMyPolicies("6").subscribe(value => {
    expect(value).toBe(policyList)
  })

  })


  it('add a new policy', () => {
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
    service.addPolicy(newPolicy).subscribe(value => {
      expect(value).toBe(responsePolicy);
    })
  })


  it('buy a policy', () => {
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
    service.buyPolicy(buyPolicy).subscribe(value => {
      expect(value).toBe(responsePolicy);
    })
  })


  it('update a new policy', () => {
    // let updatedPolicy = "id 18 policyType Health Medi coverName UHG Mediclaim premium 8214 sumInsured 10000000 coverUpto 59 description UHG termsConditions UHG email vatsalgrwl@gmail.com userId 6"

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
    service.updatePolicy(updatedPolicy).subscribe(value => {
      expect(value).toBe(updatedPolicy);
    })
  })


  it('delete a policy', () => {
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
    service.deletePolicy(18).subscribe(value => {
      expect(value).toBe(deletePolicy);
    })
  })





});
