import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {FirstserviceService} from "~services/firstservice.service";

@Component({
  selector: 'app-firstchild',
  templateUrl: './firstchild.component.html',
  styleUrls: ['./firstchild.component.scss']
})
export class FirstchildComponent implements OnInit {

  @Input() name;
  @Input() age = 30;

  @Output() newItemEvent = new EventEmitter<string>();

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

  constructor(private http: HttpClient, private firstService: FirstserviceService) { }

  ngOnInit(): void {
    this.firstService.name = 'tiwari';
    // this.name = this.firstService.name;
    this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe((response: any ) => {
      this.name = response.title;
      console.log(response);
    })

    this.profileForm.setValue({firstName: "Amit", lastName: "tiwari"});
  }

  addNewItem(value: string) {
    console.log(value);
    this.newItemEvent.emit(value);
  }


}
