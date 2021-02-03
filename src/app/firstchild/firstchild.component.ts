import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {FirstserviceService} from "~services/firstservice.service";
import {BehaviorSubject, Subject} from "rxjs";
import {count, filter, map} from "rxjs/operators";

@Component({
  selector: 'app-firstchild',
  templateUrl: './firstchild.component.html',
  styleUrls: ['./firstchild.component.scss']
})
export class FirstchildComponent implements OnInit {

  @Input() name;
  @Input() age = 30;

  @Output() newItemEvent = new EventEmitter<string>();

  subject = new Subject();
  behSubject = new BehaviorSubject(1);

  inputName = new FormControl('', [
    Validators.required,
    Validators.minLength(4),
  ]);

  profileForm = new FormGroup({
    firstName: new FormControl('rakesh', [
      Validators.required,
      Validators.minLength(4),
    ]),
    lastName: new FormControl('garg', [
      Validators.required,
      Validators.minLength(4),
    ]),
  });
  private count: number;

  constructor(private http: HttpClient, private firstService: FirstserviceService) { }

  ngOnInit(): void {
    this.firstService.name = 'tiwari';
    // this.name = this.firstService.name;
    this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe((response: any ) => {
      this.name = response.title;
      console.log(response);
    },
      (error) => {

      })

    this.profileForm.setValue({firstName: "Amit", lastName: "tiwari"});

    this.subject.pipe(
      map((value: any) => {
      console.log(value);
      return value;
    }),
      filter((value) => {
      if(value !== 'ravinder') return true;
      else return false;
    })).subscribe((value) => {
      console.log(value);
    }, (error) => {

    });

    this.behSubject.subscribe((value) => {
      console.log(value);
    });

    this.count = 0;
    this.newItemEvent.subscribe((response) => {
      console.log(response);
      // console.log(this.count);
      // this.count++;
      // if(this.count < 10) this.newItemEvent.emit(response);

    })

  }

  addNewItem(value: string) {
    console.log(value);
    this.newItemEvent.emit(value);

    this.subject.next(value);
    this.behSubject.next(1);
  }


}
