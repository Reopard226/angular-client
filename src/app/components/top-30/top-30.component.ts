import { Component, OnInit } from '@angular/core';
import {FlashMessagesService} from 'angular2-flash-messages';
import {PlaylistAndChartsService} from '../../services/playlist-and-charts.service';
import { Validators, FormGroup, FormArray, FormBuilder, FormControl } from '@angular/forms';
import {Router} from '@angular/router';



@Component({
  selector: 'app-top-30',
  templateUrl: './top-30.component.html',
  styleUrls: ['./top-30.component.css']
})
export class Top30Component implements OnInit {

  public myForm: FormGroup;
  week:string;


  constructor(
    private flashMessage:FlashMessagesService,
    private _fb:FormBuilder,
    private pc: PlaylistAndChartsService,
    private router:Router

  ) { }

  ngOnInit() {

    this.myForm = new FormGroup({
      entries: this._fb.array([
        this.initEntry(),
        this.initEntry(),
        this.initEntry(),
        this.initEntry(),
        this.initEntry(),
        this.initEntry(),
        this.initEntry(),
        this.initEntry(),
        this.initEntry(),
        this.initEntry(),
        this.initEntry(),
        this.initEntry(),
        this.initEntry(),
        this.initEntry(),
        this.initEntry(),
        this.initEntry(),
        this.initEntry(),
        this.initEntry(),
        this.initEntry(),
        this.initEntry(),
        this.initEntry(),
        this.initEntry(),
        this.initEntry(),
        this.initEntry(),
        this.initEntry(),
        this.initEntry(),
        this.initEntry(),
        this.initEntry(),
        this.initEntry(),
        this.initEntry()
      ])
    });
  }

  initEntry(){
    return this._fb.group({
      artist: [''],
      title: [''],
      label: ['']
    })
  }

  submit(){
    let chart = {
      classification: 'Top 30',
      week: this.week,
      entries: this.myForm.controls.entries.value
    }

    this.pc.saveFrontChart(chart).subscribe(data => {
      if(!data.success){
        this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 5000})
      } else {
        this.flashMessage.show('Chart Saved', {cssClass: 'alert-success', timeout: 5000})
        this.router.navigate(['front-page-charts'])

      }
    })
  }

}
