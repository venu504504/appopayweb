import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EndPoints } from "./end-points";

import { HttpInterceptorService } from "./http-interceptor.service";

import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';




@Injectable()
export class MerchantService {
  public SessionID = null;
  public userID = null;
  public countryid = null;
  constructor(public httpInterceptorService: HttpInterceptorService) {

  }




  postMerchnat(url: string,payload: any): any {
    var httpOptions = {
    headers: new HttpHeaders({
        'X-Content-Type-Options': 'nosniff', 'X-Frame-Options': 'SAMEORIGIN',
        'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
      })
    };
    return this.httpInterceptorService.post(url, payload,httpOptions).map(response => {return response;});
}



}