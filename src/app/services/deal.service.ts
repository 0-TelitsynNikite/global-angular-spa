import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class DealService {
  api: string = 'https://global-angular-spa-default-rtdb.firebaseio.com/deals'

  constructor(private http: HttpClient) { }

  getDeals(url: string) {
    return this.http.get(`${this.api}/${url}.json`)
  }

  addDeal(url: string, deal: any) {
    this.http.post(`${this.api}/${url}.json`, deal).subscribe()
  }
}
