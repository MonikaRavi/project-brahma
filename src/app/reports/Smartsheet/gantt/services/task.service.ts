import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Task} from '../model/task';

@Injectable()
export class TaskService {

  constructor(private http: HttpClient) { }

  task = [
    { id: 1, text: "Denise Wright", start_date: "", end_date: "", progress: 0, color: "green" },
    { id: 2, text: "PRJ-2345-0 Williams Canada Propylene ULC- AB", start_date: "", end_date: "", progress: 0 , color : "pink" , parent : 1},
    { id: 3, text: "Documentation", start_date: "2018-11-12 00:00", end_date: "2019-01-17 00:00", progress: 1, parent: 2 },
    { id: 4, text: "PRJ-2558 Honeywell-Alcon 5 Expansion-LA", start_date: "", end_date: "", progress: 0 , color : "pink" , parent : 1},
    { id: 5, text: "Documentation", start_date: "2019-05-23 00:00", end_date: "2019-06-06 00:00", progress: 0.5, parent: 4 },
    { id: 6, text: "Drawings", start_date: "2019-02-21 00:00", end_date: "2019-03-07 00:00", progress: 1, parent: 4 },
    { id: 7, text: "Dylan Blaschke", start_date: "", end_date: "", progress: 0, color: "green" },
    { id: 8, text: "PRJ-3052 Montgomery County Power-TX", start_date: "", end_date: "", progress: 0 , color : "pink" , parent : 7},
    { id: 9, text: "Drawings", start_date: "2019-02-19 00:00", end_date: "2019-03-05 00:00", progress: 1, parent: 8 },
    { id: 10, text: "Orion Vasquez", start_date: "", end_date: "", progress: 0, color: "green" },
    { id: 11, text: "PRJ-2576 Diageo Canada-QC", start_date: "", end_date: "", progress: 0 , color : "pink" , parent : 10},
    { id: 12, text: "Drawings", start_date: "2019-03-05 00:00", end_date: "2019-03-19 00:00", progress: 1, parent: 11 },
    { id: 13, text: "Documentation", start_date: "2019-05-15 00:00", end_date: "2019-05-29 00:00", progress: 1, parent: 11 },
  ]

 
	get(): Promise<any>{
		return Promise.resolve(this.task);
  }
  
  // insert(task: Task): Promise<Task> {
	// 	return this.http.post(this.taskUrl, task)
	// 		.toPromise()
	// 		.catch(HandleError);
	// }

	// update(task: Task): Promise<void> {
	// 	return this.http
	// 		.put(`${this.taskUrl}/${task.id}`, task)
	// 		.toPromise()
	// 		.catch(HandleError);
	// }

	// remove(id: number): Promise<void> {
	// 	return this.http.delete(`${this.taskUrl}/${id}`)
	// 		.toPromise()
	// 		.catch(HandleError);
	// }

}
