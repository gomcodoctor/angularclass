import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-firstchild',
  templateUrl: './firstchild.component.html',
  styleUrls: ['./firstchild.component.scss']
})
export class FirstchildComponent implements OnInit {

  @Input() name = 'ravinder';
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

  constructor() { }

  ngOnInit(): void {
    this.profileForm.setValue({firstName: "Amit", lastName: "tiwari"});
  }

  addNewItem(value: string) {
    console.log(value);
    this.newItemEvent.emit(value);
  }


}
