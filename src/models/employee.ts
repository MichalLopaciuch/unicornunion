import { Role } from "./role";

export class Employee{
public id:number;
public name: string;
public surname:string;
public email:string;
public password:string;
public role_id:number;
public role:Role;
constructor(id?: number, name?: string, surname?:string , email?: string,password?:string,role_id?:number,role?:Role) {
    this.id = id || 0;
    this.name = name || "";
    this.surname = surname||"";
    this.email =email||"";
    this.password=password||"";
    this.role_id=role_id||0;
    this.role=role||new Role(0,"");
  }
}