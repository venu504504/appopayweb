import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core"
import { Observable } from 'rxjs'
//import swal from 'sweetalert2';

import { catchError, map, tap } from 'rxjs/operators';

// operators
import "rxjs/add/operator/catch"
import "rxjs/add/observable/throw"
import "rxjs/add/operator/map"

import { Router } from "@angular/router";
//import { TranslateService } from "@ngx-translate/core";
//import { SharedService } from "./shared.service";

@Injectable()
export class HttpInterceptorService  {

    constructor(
        private httpClient: HttpClient, private router: Router
       
    ) { }
    

 /** GET heroes from the server */
  get(endpoint: string,httpOptions:any): Observable<any> {
    return this.httpClient.get(endpoint,httpOptions)
    .pipe(
        map(res => { return res;}), 
        
        catchError(this.handleError)
      );
  }

 /** GET heroes from the server */
 post(endpoint: string, payload: any,httpOptions:any): Observable<any> {
    return this.httpClient.post(endpoint,payload,httpOptions)
    .pipe(
        map(res => res), // returns a {0|1} element array
        
        catchError(this.handleError)
      );
  }

 /** GET heroes from the server */
 put(endpoint: string, payload: any,httpOptions:any): Observable<any> {
    return this.httpClient.put(endpoint,payload,httpOptions)
    .pipe(
        map(res => res), // returns a {0|1} element array
        
        catchError(this.handleError)
      );
  }

 
  handleError = (error: any) => {

    // Do messaging and error handling here
    if (error.statusCode === 401 || error.statusCode === 500) {
        const errMessage = '';
        if (error.status === 401) {
           //this.toastr.error('Session has expired, Please re login');
        } else {
          // this.toastr.error('Something went wrong.Please try after some time');
        }
        this.router.navigate(['/login']);

    } else {
        return Observable.throw(error);
    }
}
}