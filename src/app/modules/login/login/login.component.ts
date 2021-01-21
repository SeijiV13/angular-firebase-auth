import { AuthService } from './../../../core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  page="login";
  constructor(
    private authService: AuthService,
    private fb : FormBuilder,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
     this.form = this.fb.group({
       email: [''],
       password: ['']
     });
  }


  login() {
   this.authService.login(this.form.controls['email'].value, this.form.controls['password'].value).then((data) => {
      this.router.navigate(["/home"]);
   }).catch((err) => {
     this.toastr.error(err.message, "Error");
   });

  }

  register() {
    this.authService.register(this.form.controls['email'].value, this.form.controls['password'].value).then((data) => {
      this.toastr.success("Successfully registered", "Success");
   }).catch((err) => {
      this.toastr.error(err.message, "Error");
   });

  }

  loginWithGoogle() {
   this.authService.loginWithGoogle().then((data) => {
     this.router.navigate(["/home"]);
   }).catch((err) => {
    this.toastr.error(err.message, "Error");
  });
  }

}
