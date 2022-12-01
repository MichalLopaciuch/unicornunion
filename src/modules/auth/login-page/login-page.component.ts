import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/models/employee';
import { ApiServiceService } from 'src/modules/shared/api-service.service';

@Component({
  selector: 'uu-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  user: Employee;
   loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('' ,Validators.required),
});
  constructor(private _apiService: ApiServiceService, private _router: Router) {
    this.user = new Employee();

  }
  ngOnInit() {
    this._apiService.isLoggedIn().subscribe(res => {
      if (res == true)
        this._router.navigate([""]);
    })
  }
  get f() { return this.loginForm.controls; }
  login() {
    this.user.email = this.loginForm.controls.email.value!;
    this.user.password = this.loginForm.controls.password.value!;
    console.log(this.user);
    this._apiService.loginUser(this.user).subscribe(
      (res) => {
        switch (res) {
        case 1:
        {
              this._router.navigate(['/calendar'])

          break;

        }


        case 2:
         alert("Brak użytkownika")
          break;

        case 3:
          alert("Błędne dane logowania")
          break;

        default:
          alert("Nieznany kod błędu")
          break;

        }

      }
    );
  }
}
