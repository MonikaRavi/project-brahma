import { Injectable } from '@angular/core';

@Injectable()
export class TestIdService {

  testID;

  constructor() {

    this.testID = ''

   }

   setTestID(testNo){

    this.testID = testNo;

   }

   getTestID(){

    return this.testID;

   }

}
