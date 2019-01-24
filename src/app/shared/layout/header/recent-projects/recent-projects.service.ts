import {Injectable} from '@angular/core';

@Injectable()
export class RecentProjectsService {
  projects:any;

  constructor() {
    this.projects = [
      {
        "href": "/#/home/home",
        "title": "Haws IoT"
      },
      {
        "href": "/#/home/salesforce/opportunity",
        "title": "Opportunity"
      },
      {
        "href": "/#/home/reports/leads",
        "title": "Leads"
      }
    ]

  }

  getProjects() {
    return this.projects
  }

  clearProjects() {
    this.projects = []
  }

}
