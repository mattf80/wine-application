import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ICountry, IRegion } from './../../models/country.interface';
import { CountryService } from './../../services/country.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  public newCountryForm: FormGroup;
  showCountryForm: boolean = false;

  countries: ICountry[];
  regions: IRegion[];
  activeCountry: ICountry;
  activeRegion: IRegion;
  isBusy: boolean = false;
  panelTitle: string = "Countries";

  constructor(private service: CountryService, private fb: FormBuilder) { }

  ngOnInit() {
    this.isBusy = true;

    this.service.getCountries()
      .then(countries => this.countries = countries)
      .then(function (countries) {
        console.log(countries);
      })
      .then(bsy => setTimeout(() => this.isBusy = false, 1000));


  }

  selectCountry(country: ICountry) {
    this.activeCountry = country;
    this.panelTitle = this.activeCountry.name + ' / ';

  }

  selectRegion(region: IRegion) {
    this.activeRegion = region;
    this.panelTitle = this.activeCountry.name + ' / ' + this.activeRegion.name + ' / ';
  }

  addSubRegion() {
    console.log("Add sub region clicked!");
  }

  addCountry() {
    this.showCountryForm = !this.showCountryForm;
    if (this.showCountryForm) {
      this.newCountryForm = this.fb.group({
        name: ['', [Validators.required, Validators.minLength(5)]],
      });
    }

  }

  saveCountry(model: ICountry) {
    this.service.addCountry(model);
    this.showCountryForm = false;
  }

}
