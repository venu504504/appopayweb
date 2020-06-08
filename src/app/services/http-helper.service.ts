import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalStorageService } from 'ngx-webstorage';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
import { HttpInterceptorService } from './http-interceptor.service';


@Injectable({providedIn: 'root'})
export class HttpHelper {
    constructor(
        private httpInterceptorService: HttpInterceptorService,
        private storage: LocalStorageService){

    }
    token = null;
    url = null;

    public BaseUrl: any = 'http://168.61.211.238:3000';
      version = "/v2/";

    getUrl() {
        return this.url;
    }

    setUrl(endpoint): any {
        // this.token = this.storage.retrieve('access_token');
        this.url = this.BaseUrl + this.version + endpoint;// + '?access_token=' + this.token;
        return 1;
    }

    get(endpoint: string): Observable<any> {
        this.setUrl(endpoint);
       
        var httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
          
          };


  
        return this.httpInterceptorService.get(this.getUrl(), httpOptions)
            .pipe(
                map(response => {
                   
                    console.log("response.json() = "+response.json());
                    return response;
                }));

    }

    post(endpoint: string, payload: any): Observable<any> {
        this.setUrl(endpoint);
      
        var httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
          
          };
        return this.httpInterceptorService.post(this.getUrl(), payload, httpOptions)
            .pipe(
                map(response => {
                   
                    console.log(endpoint + ": response.json() :: " +JSON.stringify(response.json()));
                    return response;  
                }));

    }

    put(endpoint: string, payload: any): Observable<any> {
        this.setUrl(endpoint);
        var httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
          
          };
        return this.httpInterceptorService.put(this.getUrl(), payload, httpOptions)
            .pipe(
                map(response => {
                  
                    return response;
                }));

    }
}