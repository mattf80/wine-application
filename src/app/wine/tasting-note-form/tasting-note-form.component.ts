import { IWine } from './../../models/wine.interface';

import { TastingNote } from './../../models/tasting-note';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Validators, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { WineService } from './../../services/wine.service';

@Component({
  selector: 'tasting-note-form',
  templateUrl: './tasting-note-form.component.html',
  styleUrls: ['./tasting-note-form.component.css']
})
export class TastingNoteFormComponent implements OnInit {
  @Output() noteCreated = new EventEmitter();
  @Input() wine: IWine;

  newTastingNote: TastingNote;
  public tastingNoteForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private wineService: WineService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    return     this.tastingNoteForm = this.fb.group({
      notes: ['', [Validators.required, Validators.minLength(5)]],
      score: ['', [Validators.required]],
      dateTasted: ['', [Validators.required]]
    });
  }

    save(model: TastingNote) {
    this.wineService.addTastingNote(this.wine.id, model)
      .subscribe(newNote => this.noteCreated.emit({newNote: newNote}));
  }
}
