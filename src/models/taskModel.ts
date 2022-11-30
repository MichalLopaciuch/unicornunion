import { Project } from "./project";

export class TaskModel{
    public id:number;
    public project:Project;
    public time_spent:number;
    public user_id: number;
    public note:string;
    constructor(id: number, project: Project, time_spent:number , user_id: number,note:string) {
        this.id = id;
        this.project = project;
        this.time_spent = time_spent;
        this.user_id =user_id;
        this.note=note;
      }
}