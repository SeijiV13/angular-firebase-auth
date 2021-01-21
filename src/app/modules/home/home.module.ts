import { HomeComponent } from './home/home.component';
import { HomeRoutes } from './home.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutes
  ]
})
export class HomeModule { }
