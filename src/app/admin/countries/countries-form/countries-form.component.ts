import { ICountry } from './../../../models/country.interface';
import { CountryService } from './../../../services/country.service';

import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'countries-form',
  templateUrl: './countries-form.component.html',
  styleUrls: ['./countries-form.component.css']
})
export class CountriesFormComponent implements OnInit {
  public myForm: FormGroup;


  constructor(private _fb: FormBuilder, private service: CountryService) { }

  ngOnInit() {
    this.myForm = this._fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      regions: this._fb.array([
        this.initRegion(),
      ])
    });
  }

  initRegion() {
    // initialize our regoin
    return this._fb.group({
      name: ['', Validators.required]
    });
  }

  addRegion(){
    const control = <FormArray>this.myForm.controls['regions'];
    control.push(this.initRegion());
  }

  removeRegion(i: number){
    const control = <FormArray>this.myForm.controls['regions'];
    control.removeAt(i);
  }

  save(model: ICountry) {
    console.log(model);
    this.service.addCountry(model);
  }

}
