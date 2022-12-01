import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiServiceService } from 'src/modules/shared/api-service.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  baseUrl: string;
  constructor(public auth: ApiServiceService, public router: Router, private http: HttpClient) {
    this.baseUrl = window.location.origin;

  }
  canActivate(): boolean {
    var result = false;
    this.http.get(this.baseUrl + "/api/auth/CanAccess").subscribe({
        next:(res)=>{
            result = res as boolean;
            if (result == false) {
    
              this.router.navigate(['/signIn']);
              return result
            }
            if (result == true)
              return result;

              return false;
        },
        error:(err)=> {
            console.log(err);
            return false;
        }
    })
    return false;
  }
}