import { TastingNote } from './../models/tasting-note';
import { IWine, IGrape } from './../models/wine.interface';
import { Observable } from 'rxjs/Observable';

import { HttpModule, Http, Headers, Response, RequestOptions } from '@angular/http';

import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class WineService {

  private baseUrl: string = 'http://localhost:50903/api/';
  
  private headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });

  constructor(private http: Http) { }

  getWines(): Promise<IWine[]> {
    return this.http.get(this.baseUrl + 'wines/')
      .toPromise()
      .then(response => response.json().wines as IWine[]);
  }

  getWineObservable(id: number): Observable<IWine> {
    let wine$ = this.http.get(this.baseUrl + 'wines/' + id)
      .map((res: Response) => res.json().wine)
      .catch(this.handleError);

    return wine$;
  }

  getGrapesObservable(): Observable<IGrape[]> {
    let grapes$ = this.http.get(this.baseUrl + 'grapes/')
      .map((res: Response) => res.json().grapes.result)
      .catch(this.handleError);

    return grapes$;
  }

  addWinePromise(wine: IWine): Promise<IWine> {
    return this.http.post(this.baseUrl + 'wines', wine, {headers: this.headers})
      .toPromise()
      .then(res => res.json().wine)
  }

  addWine(wine: IWine): Observable<IWine> {
    console.log(JSON.stringify(wine));
    return this.http.post(this.baseUrl + 'wines/', JSON.stringify(wine), { headers: this.headers })
      .map((res: Response) => res.json().newWine)
      .catch(this.handleError);
  }

    updateWine(wine: IWine): Observable<IWine> {
    console.log(JSON.stringify(wine));
    return this.http.put(this.baseUrl + 'wines/' + wine.id, JSON.stringify(wine), { headers: this.headers })
      .map((res: Response) => res.json().updatedWine)
      .catch(this.handleError);
  }

  addTastingNote(wineId: number, tastingNote: TastingNote): Observable<TastingNote> {
    let  url: string = this.baseUrl +  'wines/' + wineId + '/notes';
    return this.http.post(url, JSON.stringify(tastingNote), { headers: this.headers})
      .map((res: Response) => res.json().newNote)
      .catch(this.handleError);
  }

  deleteWine(id: number): Observable<void> {
  const url = `${this.baseUrl}wines/${id}`;
  return this.http.delete(url, {headers: this.headers})
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
