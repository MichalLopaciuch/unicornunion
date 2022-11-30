import { TaskModel } from "./taskModel";

export class Calendar{
    public id:number;
    public date:Date;
    public user_id:number;
    public tasks:TaskModel[];
    constructor(id: number, date: Date, user_id:number , tasks:TaskModel[]) {
        this.id = id;
        this.date = date;
        this.user_id = user_id;
        this.tasks=tasks;
      }
}