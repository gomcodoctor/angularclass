import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {FirstserviceService} from "~services/firstservice.service";

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {
  queryParams: Params;
  params: Params;

  items = [];

  constructor(protected _route: ActivatedRoute, private firstService: FirstserviceService) { }

  public ngOnInit(): void {
    console.log(this.firstService.name);

    this.firstService.name = 'Manpreet';

    this._route.params.subscribe((params) => {
      this.params = params;
      console.log(params);

    });

    this._route.queryParams.subscribe((queryParams) => {
      this.queryParams = queryParams;
      console.log(queryParams);

    });
  }

  addItem(newItem: string) {
    this.items.push(newItem);
  }

  removeItem(index) {
    this.items.splice(index, 1);
  }

}
