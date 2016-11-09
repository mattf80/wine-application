import { IWine } from './../models/wine.interface';
import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()

export class WineSearchService {

    private url:string = 'http://localhost:50903/api/wines';

  constructor(private http: Http) {}

  search(term: string): Observable<IWine[]> {
    return this.http
               .get(this.url + `?nameSearch=${term}`)
               .map((r: Response) => r.json().wines as IWine[]);
  }
}
