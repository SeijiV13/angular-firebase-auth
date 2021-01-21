import { LoginComponent } from './login/login.component';
import { LoginRoutes } from './login.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutes,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
