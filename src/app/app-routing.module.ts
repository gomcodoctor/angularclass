import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HelloComponent} from "~app/app/hello/hello.component";

const routes: Routes = [{
  path: 'details/:name',
  component: HelloComponent
},
  {
    path: 'hello2',
    component: HelloComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
