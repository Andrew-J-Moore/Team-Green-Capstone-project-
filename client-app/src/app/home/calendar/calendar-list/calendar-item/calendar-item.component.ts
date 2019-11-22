import { Component, OnInit, Input, Inject, ViewChild } from '@angular/core';
import { Calendar } from '../calendar.model';
import { CalendarService } from '../calendar.service';
import { AuthService } from 'src/app/auth/auth.service';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA, MatSnackBar, MatChipInputEvent } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ShareCalendarComponent } from '../../share-calendar/share-calendar.component';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { DataStorageService } from 'src/app/home/shared/data-storage.service';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { GroupSelection } from 'src/app/home/shared/group-selection';

@Component({
  selector: 'app-calendar-item',
  templateUrl: './calendar-item.component.html',
  styleUrls: ['./calendar-item.component.css']
})
export class CalendarItemComponent implements OnInit {
  @Input()index: number;//index of calendar in list
  @Input()calendar: Calendar;//calendar object to show
  checked = true;
  username: string;

  constructor(private calService: CalendarService,
    private dataStorage: DataStorageService,
    private authService: AuthService,
    private dialog: MatDialog,
    private snackbar: MatSnackBar) { }

  ngOnInit() {
    this.username = this.authService.name;
  }
  
  toggleCal(){
    this.calService.toggleCalendar(this.calendar);
  }

  deleteCal(){
    const dialogRef = this.dialog.open(DeleteConfirm, {
      width: "250px"
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result === 'confirmed'){
        this.dataStorage.deleteCalendar(this.calendar.id).subscribe(result => {
          if(result){
            console.log(result);
            this.snackbar.open(result.message, 'OK',{duration: 5000});
            if(result.status === 200){
              this.dataStorage.fetchCalendars();
            }
          }
        });
      }
    })
  }

  renameCal(){
    this.dialog.open(CalRename, {
      width:"500px",
      data: this.calendar
    })
  }

  shareCal(){
    this.dialog.open(ShareCalendarComponent, {
      width: "500px",
      height:"300px",
      data: this.calendar
    });
  }

}

@Component({
  selector: 'app-cal-rename',
  templateUrl: 'cal-rename.html',
  styleUrls: ['calendar-item.component.css']
})
export class CalRename implements OnInit{
  nameForm: FormGroup;
  cal: Calendar;
  primaryColor: string;
  emails: string[];
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  email = new FormControl("",[Validators.email]);
  isEmailValid: boolean;
  @ViewChild("chipList", { static: false }) chipList;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  errorMessage: string;
  
  constructor (
    private ref: MatDialogRef<CalRename>,
    private dataStorage: DataStorageService,
    private dialog: MatDialog,
    private snackbar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA)public data: Calendar
  ){}
  ngOnInit(){
    this.cal = this.data;
    console.log(this.cal);
    this.emails=[];
    for(let user of this.cal.shareduser){
      this.emails.push(user.email);
    }
    this.primaryColor = this.cal.color;
    this.nameForm = new FormGroup({
      name: new FormControl(this.cal.name, [Validators.required]),
      email: this.email,
      color: new FormControl()
    })
  }
  onSubmit(){
    const nameFormValues = this.nameForm.value;
    const obj = {
      name: nameFormValues.name,
      color: this.primaryColor,
      recipients: this.emails
    }
    this.dataStorage.updateCalendar(obj, this.cal.id).subscribe(result => {
      if(result){
        console.log(result);
        this.snackbar.open(result.message, 'OK', {duration: 5000});
        if(result.status === 200){
          this.ref.close();
          this.dataStorage.fetchCalendars();
        }
        
      }
    });
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    // const value = event.value;
    this.email.setValue(event.value);
    console.log(this.email.hasError("email"));
    if (!this.email.hasError("email")) {
      // if (!this.email.hasError("email")) {
      if (this.email.value.trim()) {
        this.isEmailValid = true;
        this.emails.push(this.email.value.trim());
        this.emails.sort((a, b) =>
          a.toLowerCase() < b.toLowerCase()
            ? -1
            : a.toLowerCase() > b.toLowerCase()
            ? 1
            : 0
        );
        console.log(this.emails);
      } else if (this.email.value === "" && this.emails.length < 0) {
        this.chipList.errorState = true;
        this.isEmailValid = false;
        this.errorMessage = "please enter a valid email address";
      } else {
        this.chipList.errorState = false;
      }
    } else {
      this.chipList.errorState = true;
      this.isEmailValid = false;
      this.errorMessage = "please enter a valid email address";
    }

    // Reset the input value
    if (input) {
      input.value = "";
    }

    
  }

  groupSelect(){
    const dialogRef = this.dialog.open(GroupSelection, {
      width: "500px"
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      for(let email of result){
        if(!this.emails.includes(email)){
          this.emails.push(email);
        }
      }
    })
  }

  remove(email: string): void {
    const index = this.emails.indexOf(email);

    if (index >= 0) {
      this.emails.splice(index, 1);
    }
  }

  setPrimary(color: string){
    this.primaryColor = color;
  }

  close(){
    this.ref.close();
  }
}

@Component({
  selector: 'app-delete-confirm',
  templateUrl: 'delete-confirm.html',
  styleUrls: ['calendar-item.component.css']
})
export class DeleteConfirm{

  constructor(
    private ref: MatDialogRef<DeleteConfirm>
  ){}

  close(){
    this.ref.close('cancel');
  }

  delete(){
    this.ref.close('confirmed');
  }

}

