import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ApiServiceService } from 'src/modules/shared/api-service.service';

@Component({
  selector: 'uu-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(private router:Router, private apiService:ApiServiceService) { }

  ngOnInit(): void {
    this.apiService.isLoggedIn().subscribe({
      next:(res)=>{
        if(res)
        this.router.navigate(['/calendar']);
        else
        this.router.navigate(['/login']);
      }
    })
  }

}
