import { IWine } from './../../models/wine.interface';
import { WineService } from './../../services/wine.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-wine-detail',
  templateUrl: './wine-detail.component.html',
  styleUrls: ['./wine-detail.component.css']
})
export class WineDetailComponent implements OnInit {

  wine: IWine;
  deleteMsg: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: WineService
  ) { }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.service.getWineObservable(id)
        .subscribe(w => this.wine = w)
    });
  }



  gotoWines() {
    let wineId = this.wine ? this.wine.id : null;
    // Pass along the  id if available
    // so that the List component can select that wine.
    this.router.navigate(['/wine/list', { id: wineId, foo: 'foo' }]);
  }

  onNoteCreated(event) {
    this.wine.tastingNotes.push(event.newNote);
  }

  deleteWine(wine: IWine) {
    this.service.deleteWine(wine.id)
      .subscribe(wine => console.log(wine));
      return this.router.navigate(['/wine/list', {deletedId: wine.id}]);
  }

  showUpdateWineForm(wine: IWine){
    return this.router.navigate(['/wine/edit', wine.id]);
  }

}
