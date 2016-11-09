/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WineListComponent } from './wine-list.component';

describe('WineListComponent', () => {
  let component: WineListComponent;
  let fixture: ComponentFixture<WineListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WineListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
