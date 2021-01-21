import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {
  queryParams: Params;

  constructor(protected _route: ActivatedRoute) { }

  public ngOnInit(): void {
    this._route.params.subscribe((queryParams) => {
      this.queryParams = queryParams;
      console.log(queryParams);
      //{name: 'Rakesh'}
    });
  }

}
