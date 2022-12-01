import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminPanelModule } from 'src/modules/admin-panel/admin-panel.module';
import { CalendarModule } from 'src/modules/calendar/calendar.module';
import { SharedModule } from 'src/modules/shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from 'src/modules/auth/auth.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalendarModule,
    AuthModule,
    AdminPanelModule,BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,ReactiveFormsModule,FormsModule,
    HttpClientModule
  ],
  providers: [],
  exports:[ReactiveFormsModule,FormsModule,],
  bootstrap: [AppComponent]
})
export class AppModule { }
