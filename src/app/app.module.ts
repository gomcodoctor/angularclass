import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HelloComponent } from './app/hello/hello.component';
import { FirstchildComponent } from './firstchild/firstchild.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {FirstserviceService} from "~services/firstservice.service";

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    FirstchildComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
  providers: [FirstserviceService],
  bootstrap: [AppComponent]
})


export class AppModule {
  // app = new FirstchildComponent(this.rakesh);
  //
  // constructor(private rakesh: HttpClient) {
  // }
}
