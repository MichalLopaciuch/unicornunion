import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { PlatformLocation } from '@angular/common';
import { Calendar } from 'src/models/calendar';
import { map, Observable } from 'rxjs';
import { TaskModel } from 'src/models/taskModel';
import { baseUrl } from 'src/environments/environment';
import { Employee } from 'src/models/employee';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  baseUrl: string;
  constructor(private http: HttpClient, pl: PlatformLocation) {
    this.baseUrl = baseUrl.length>0 ? baseUrl : window.location.origin;
  }
  loginUser(user: Employee): Observable<number> {
    return this.http.post<number>(this.baseUrl + "/api/auth/Login", user).pipe(
      (res) => {
        return res;
      }
    )
  }
  getAuthority(): Observable<number> {
    return this.http.get(this.baseUrl + "/api/auth/GetAuthority").pipe(map(res => { return res as number }));
  }
  getUserId(): Observable<number> {
    return this.http.get(this.baseUrl + "/api/auth/GetUserId").pipe(map(res => { return res as number }));
  }
  logout(): Observable<number> {
    return this.http.get(this.baseUrl + "/api/auth/Logout").pipe(map(res => { return res as number }));
  }
  isLoggedIn(): Observable<boolean> {
    return this.http.get(this.baseUrl + "/api/auth/CanAccess").pipe(map(res => { return res as boolean }));
  }

  getCalendar(): Observable<Calendar[]> {
    return this.http.get(this.baseUrl + "/api/calendar/getCalendar").pipe(map(res => { return res as Calendar[] }));
}
addTask(task: TaskModel): Observable<number> {
  return this.http.post<number>(this.baseUrl + "/api/calendar/newTask", task).pipe(
    (res) => {
      return res;
    }
  )
}
deleteTask(taskId: number): Observable<number> {
  return this.http.delete(this.baseUrl + "/api/jcalendar/deleteTask" + taskId).pipe(map(res => { return res as number }));
}
editTask(task: TaskModel): Observable<number> {
  return this.http.put<number>(this.baseUrl + "/api/calendar/editTask", task).pipe(
    (res) => {
      return res;
    }
  )
}
}
