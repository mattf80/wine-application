import { Observable } from 'rxjs/Observable';
import { ICountry } from './../models/country.interface';

import { Http, Headers, Response } from '@angular/http';

import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class CountryService {

  private url: string = 'http://localhost:50903/api/countries';

  constructor(private http: Http) { }

  getCountries(): Promise<ICountry[]> {
    return this.http.get(this.url)
      .toPromise()
      .then(response => response.json().countries as ICountry[]);
  }

  getCountriesObservable(): Observable<ICountry[]> {
    let countries$ = this.http.get(this.url)
      .map((res: Response) => res.json().countries)
      .catch(this.handleError);

    return countries$;
  }

  addCountry(model: ICountry): Promise<ICountry> {
    return this.http.post(this.url, model)
      .toPromise()
      .then(res => res.json().country)
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
