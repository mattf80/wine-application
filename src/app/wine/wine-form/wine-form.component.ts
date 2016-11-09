import { ICountry, IRegion } from './../../models/country.interface';
import { CountryService } from './../../services/country.service';
import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { WineService } from './../../services/wine.service';
import { IWine, IGrape } from './../../models/wine.interface';

@Component({
  selector: 'wine-form',
  templateUrl: './wine-form.component.html',
  styleUrls: ['./wine-form.component.css']
})
export class WineFormComponent implements OnInit {

  public wineForm: FormGroup;
  public events: any[] = [];

  grapes: IGrape[];
  countries: ICountry[];
  regions: IRegion[];
  public wine: IWine;

  constructor(
    private fb: FormBuilder,
    private wineService: WineService,
    private route: ActivatedRoute,
    private router: Router,
    private countryService: CountryService) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      if (id) {
        this.wineService.getWineObservable(id)
          .subscribe(w => this.wine = w)                
      };
    });
    
    this.initForm();
    this.getGrapes();
    this.getCountries();
    this.subcribeToFormChanges();


    this.wineForm.valueChanges
      .debounceTime(500)
      .subscribe(data => console.log('form changes', data));
  }

  initForm() {
    return this.wineForm = this.fb.group({
      id: [],
      name: ['', [Validators.required, Validators.minLength(5)]],
      vintage: ['', [Validators.required]],
      countryId: ['', [Validators.required]],
      regionId: [''],
      grapes: this.fb.array([
        this.initGrapes(),
      ])
      
    });

  }

    subcribeToFormChanges() {
        const myFormStatusChanges$ = this.wineForm.statusChanges;
        const myFormValueChanges$ = this.wineForm.valueChanges;
        
        myFormStatusChanges$.subscribe(x => this.events.push({ event: 'STATUS_CHANGED', object: x }));
        myFormValueChanges$.subscribe(x => this.events.push({ event: 'VALUE_CHANGED', object: x }));
    }


  initGrapes() {
    return this.fb.group({
      id: []
    });
  }

  getGrapes() {
    return this.wineService.getGrapesObservable()
      .subscribe(grapes => this.grapes = grapes);
  }

  getCountries() {
    return this.countryService.getCountriesObservable()
      .subscribe(countries => this.countries = countries);

  }

  onCountryChange(countryId: number) {
    let selectedCountry: ICountry = this.countries.find(c => c.id == countryId);
    this.regions = selectedCountry.regions;
    //need to re-set the region id as well, but don't know how.
  }


  addGrape() {
    const control = <FormArray>this.wineForm.controls['grapes'];
    control.push(this.initGrapes());
  }

  removeGrape(i: number) {
    const control = <FormArray>this.wineForm.controls['grapes'];
    control.removeAt(i);
  }

  save(model: IWine) {

      this.wineService.addWine(model)
        .subscribe(newWine => console.log(newWine));
    }
    //this.wineService.addWinePromise(model);

}
