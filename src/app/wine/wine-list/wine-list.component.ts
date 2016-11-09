import { Router, ActivatedRoute, Params } from '@angular/router';
import { IWine } from './../../models/wine.interface';
import { WineService } from './../../services/wine.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'wine-list',
  templateUrl: './wine-list.component.html',
  styleUrls: ['./wine-list.component.css']
})
export class WineListComponent implements OnInit {

  constructor(
    private service: WineService, 
    private router: Router,
    private route: ActivatedRoute) { }

  private selectedId: number;
  wines: IWine[];
  isBusy: boolean = false;

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.selectedId = +params['id'];

      this.service.getWines()
        .then(wines => this.wines = wines)
        .then(bsy => setTimeout(() => this.isBusy = false, 1000))
        .then(() => console.log(this.wines));

    });
  }


  onSelect(wine: IWine) {
    this.router.navigate(['/wine/detail', wine.id]);
  }

  isSelected(wine: IWine) { return wine.id === this.selectedId; }

}