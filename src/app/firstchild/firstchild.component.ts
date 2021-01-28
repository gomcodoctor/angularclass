import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

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

  constructor() { }

  ngOnInit(): void {
  }

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }


}
