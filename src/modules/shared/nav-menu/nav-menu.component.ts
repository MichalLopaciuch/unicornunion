import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'uu-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {

  isExpanded = false;
  authority: number;
  userId:number;
  isLoggedIn: boolean;
  constructor(private _apiService: ApiServiceService, private _router: Router) {
  
    this.isLoggedIn = false;
    this.authority = 0;
    this.userId = 0;
  }
  ngOnInit() {

    this.isLoggedInCheck();
    this.getAuthority();

  }
  isLoggedInCheck() {
    this._apiService.isLoggedIn().subscribe(res => {
      this.isLoggedIn = res;
      this.getAuthority();

    });
  }
  getAuthority() {
    this._apiService.getAuthority().subscribe(res => {
      this.authority = res;
      console.log(this.isLoggedIn)
    });
  }
  logout() {
    this._apiService.logout().subscribe(res => {
      console.log(res)
      this.isLoggedIn = false;
      this.authority = 0;
      this._router.navigate([""]);
      // return res as boolean;
    });
  }
}
