export interface PolicySend {
policyType: string,
coverName: string,
premium: string,
sumInsured: string,
coverUpto: string,
description: string,
termsConditions: string,
userId?: string
}

export interface PolicyReceive {
    id: number;
    policyType: string,
    coverName: string,
    premium: string,
    sumInsured: string,
    coverUpto: string,
    description: string,
    termsConditions: string,
    userId?: string,
    email: string
}

