import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from 'src/modules/admin-panel/dashboard/dashboard.component';
import { LoginPageComponent } from 'src/modules/auth/login-page/login-page.component';
import { MainComponent } from 'src/modules/calendar/main/main.component';
import { LandingPageComponent } from 'src/modules/home/landing-page/landing-page.component';

const routes: Routes = [
  {path: 'calendar' , component: MainComponent},
  {path: 'adminPanel' , component: DashboardComponent},
  {path: '' , component: LandingPageComponent},
  {path: 'login' , component: LoginPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
