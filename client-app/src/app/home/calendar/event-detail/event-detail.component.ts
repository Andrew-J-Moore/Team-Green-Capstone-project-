import { Component, OnInit, Inject } from '@angular/core';
import { CalendarService } from '../calendar-list/calendar.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CalEvent } from '../events.model';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatSnackBar, MatListOption } from '@angular/material';
import { DataStorageService } from '../../shared/data-storage.service';
import { AuthService } from 'src/app/auth/auth.service';
import { ShareEvent } from './share-event';
import { RecursiveTemplateAstVisitor } from '@angular/compiler';
import { AppointmentSnackbarComponent } from '../../appointment/shared-appointment/appointment-snackbar/appointment-snackbar.component';
import { MessageGroupComponent } from '../../group/message-group/message-group.component';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  id:number;
  event: any;
  newEnd: Date;
  isAppt: boolean;
  guestEmails: string[];
  pending: any[];
  username: string;
  viewAttendees: boolean;
  viewConfirmed: boolean;
  viewAll: boolean;
  viewPending:boolean;
  guests: any[];
  invitees: any[];
  selectedRecipients:string[];

  constructor(private calService: CalendarService,
    private router: Router,
    private ref: MatDialogRef<EventDetailComponent>,
    private authService: AuthService,
    private dialog: MatDialog,
    private snackbar: MatSnackBar,
    private dataStorage: DataStorageService,
    @Inject(MAT_DIALOG_DATA)public data: CalEvent) { 
    }

  ngOnInit() {
    this.viewAttendees = false;
    this.viewConfirmed = false;
    this.selectedRecipients = [];
    this.invitees = [];
    this.guestEmails = [];
    this.pending = [];
    this.event = this.data;
    this.username = this.authService.name;
    if(this.event.allDay && this.event.end){
      this.newEnd = this.event.end;
      this.newEnd.setDate(this.event.end.getDate()-1);
    }
    if(this.event.extendedProps.timeSlotId){
      this.isAppt = true;
    } else{
      this.isAppt = false;
    }
    this.guests = this.event.extendedProps.confirmedBy;
    for(let guest of this.guests){
      this.guestEmails.push(guest.email);
    }
    for(let user of this.event.extendedProps.recipients){
      if(!this.guestEmails.includes(user.email)){
        this.pending.push(user);
      }
      this.invitees.push(user.email);
    }
    console.log(this.guests);
    console.log(this.event);
  }

  close(){
    this.ref.close();
  }

  onNoClick(){
    this.ref.close();
  }

  onSelectChange(options: MatListOption[]) {
    console.log(options.map(o => o.value));
    this.selectedRecipients = options.map(o => o.value);
    // console.log(this.selectedPendingRecipients);
  }

  viewGuests(){
    this.viewAttendees = !this.viewAttendees;
    this.switchToConfirmed();
  }

  switchToConfirmed(){
    this.viewConfirmed = true;
    this.viewAll = false;
    this.viewPending = false;
  }

  switchToAll(){
    this.viewConfirmed = false;
    this.viewAll = true;
    this.viewPending = false;
  }

  switchToPending(){
    this.viewConfirmed=false;
    this.viewAll = false;
    this.viewPending=true;
  }

  editEvent(){
    this.ref.close();
    this.router.navigate(["home/edit-event", this.event.id])
  }

  deleteEvent(){
    const dialogRef = this.dialog.open(EventDeleteConfirm, {
      width: "300px"
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result === 'confirmed'){
        this.dataStorage.deleteEvent(this.event.id).subscribe(result => {
          this.snackbar.open(result.message, 'close', {duration:4000, panelClass: ["delete"]})
          this.ref.close();
          this.dataStorage.fetchCalendars();
        });

      }
    })
  }

  shareEvent(){
    const dialogRef = this.dialog.open(ShareEvent, {
      width: "400px",
      height: "350px"
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result !== 'cancel'){
        const obj = {
          eventId: +this.event.id,
          recipients: result
        }
        this.dataStorage.shareEvent(obj).subscribe(result => {
          if(result){
            this.snackbar.open(result.message, 'close', {duration:4000, panelClass: ["standard"]})
          } else { 
            this.snackbar.open('Something went wrong.', 'close', {duration:4000, panelClass: ["standard"]})
          }
        });
        this.dataStorage.fetchCalendars();
      }
    })

  }

  confirmAttendance(){
    this.dataStorage.userConfirmEvent(this.event.id).subscribe(result => {
      if (result) {
        this.snackbar.open(result.message, 'close', {duration:4000, panelClass: ["standard"]})
      } else {
        this.snackbar.open('Something went wrong.', 'close', {duration:4000, panelClass: ["standard"]})
      }
    })
  }

  messageSelectedRecipients() {
    console.log(this.selectedRecipients);
    const dialogRef = this.dialog.open(MessageGroupComponent, {
      width: "400px",
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      result.recipients = this.selectedRecipients;
      console.log(result);
      if (result) {
        this.dataStorage.emailSelectedMembers(result).subscribe(result => {
          console.log(result);
          if (result.result) {
            this.snackbar.open(
              "An email has been successfully to selected members!",
              "close",
              {
                duration: 5000,
                panelClass: ["standard"]
              }
            );
          } else {
            this.snackbar.open(
              "Something went wrong, please contact admin!",
              "close",
              {
                duration: 5000,
                panelClass: ["delete"]
              }
            );
          }
        });
      }
    });
  }

}

@Component({
  selector: 'confirm-event-delete',
  templateUrl: 'event-delete-confirm.html',
  styleUrls: ['./event-detail.component.css']
})

export class EventDeleteConfirm{
  constructor(
    private ref: MatDialogRef<EventDeleteConfirm>,
    private authService: AuthService
  ){}

  delete(){
    this.ref.close('confirmed')
  }

  close(){
    this.ref.close('cancel');
  }
}
