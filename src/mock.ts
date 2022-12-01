import { Calendar } from "./models/calendar";
import { Project } from "./models/project";
import { TaskModel } from "./models/taskModel";
let project1: Project = {id:1,name:"Wdrożenie nowego SAP"}
let project2: Project = {id:1,name:"Szkolenia"}
let project3: Project = {id:1,name:"Nowe usługi biznesowe"}
let tasks: TaskModel[] = [
    {id:1,note:"Realizacja zadania 1",time_spent:8,user_id:1,project:project1},
    {id:2,note:"Realizacja zadania 2",time_spent:8,user_id:1,project:project2},
    {id:3,note:"Realizacja zadania 3",time_spent:4,user_id:1,project:project1},
    {id:4,note:"Realizacja zadania 4",time_spent:4,user_id:1,project:project3},
    {id:5,note:"Realizacja zadania 5",time_spent:8,user_id:1,project:project2}
]

let calendar: Calendar[] = [
    { "id": 3, "date":new Date(Date.now() - 15*24*60*60*1000),user_id:1, tasks:[tasks[2],tasks[3]]},
    { "id": 1, "date":new Date(Date.now() - 13*24*60*60*1000),user_id:1,tasks:[tasks[0]]},
    { "id": 2, "date":new Date(Date.now() - 14*24*60*60*1000),user_id:1,tasks:[tasks[4]]}
];