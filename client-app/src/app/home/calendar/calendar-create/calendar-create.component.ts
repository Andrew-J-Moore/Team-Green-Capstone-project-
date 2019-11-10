import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';
import { DataStorageService } from '../../shared/data-storage.service';

@Component({
  selector: 'app-calendar-create',
  templateUrl: './calendar-create.component.html',
  styleUrls: ['./calendar-create.component.css']
})
export class CalendarCreateComponent implements OnInit {
  calForm: FormGroup;
  emails: string[];
  color: string = '#5484ed';

  constructor(
    private ref: MatDialogRef<CalendarCreateComponent>,
    private dataStorage: DataStorageService
  ) { }

  ngOnInit() {
    this.emails=[];
    this.calForm = new FormGroup({
      name: new FormControl(),
      recipients: new FormControl(),
      color: new FormControl()
    })
  }

  close(){
    this.ref.close();
  }

  setPrimary(color: string){
    this.color = color;
  }

  onSubmit(){
    if(this.calForm.value['recipients']){
      this.emails=this.calForm.value['recipients'].split(',');
    }
    const obj = {
      name: this.calForm.value['name'],
      recipients: this.emails,
      color: this.color
    }
    this.dataStorage.newCalendar(obj).subscribe(result => {
      console.log(obj);
      if (result) {
        this.dataStorage.fetchCalendars();
      }
    });
    this.ref.close();
  }

}
