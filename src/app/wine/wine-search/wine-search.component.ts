import { IWine } from './../../models/wine.interface';
import { WineSearchService } from './../../services/wine-search.service';
import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

@Component({
  //moduleId: module.id,
  selector: 'wine-search',
  templateUrl: 'wine-search.component.html',
  styleUrls: [ 'wine-search.component.css' ],
  providers: [WineSearchService]
})
export class WineSearchComponent implements OnInit {

  wines: Observable<IWine[]>; 
  private searchTerms = new Subject<string>();

  constructor(
    private wineSearchService: WineSearchService,
    private router: Router) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.wines = this.searchTerms
      .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time
        // return the http search observable
        ? this.wineSearchService.search(term)
        // or the observable of empty wines if no search term
        : Observable.of<IWine[]>([]))
      .catch(error => {
        // TODO: real error handling
        console.log(error);
        return Observable.of<IWine[]>([]);
      });
  }
  gotoDetail(wine: IWine): void {
    let link = ['/wine/detail', wine.id];
    this.router.navigate(link);
  }
}
