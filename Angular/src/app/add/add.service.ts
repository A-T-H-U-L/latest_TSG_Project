import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const routes = {
  quote: (c: RandomQuoteContext) => `/jokes/random?category=${c.category}`,
};


export interface DetailContext {
  name: string;
  consultentType:string;
  ratePerHour: any;
  state:string
  // remember?: boolean;
}

export interface RandomQuoteContext {
  // The quote's category: 'dev', 'explicit'...
  category: string;
}

@Injectable({
  providedIn: 'root',
})
export class AddService {
  constructor(private httpClient: HttpClient) {}

  // AddTaxPro(id: any): Observable<any> {
  //   return this.httpClient.post('/taxpro/addDetail', { observe: 'response' }).pipe(
  //     map((res: HttpResponse<any>) => {
  //       return res.body;
  //     })
  //   );
  // }

  AddTaxPro(requestObj: DetailContext): Observable<any> {
    return this.httpClient.post('/taxpro/add', requestObj, { observe: "response" }).pipe(
      map((res: HttpResponse<any>) => {
        return res.body;
      })
    );
  }


}
