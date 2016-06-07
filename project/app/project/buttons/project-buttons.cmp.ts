import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import {Project} from '../../../service/project/project';
import {ProjectSvc} from '../../../service/project/project.svc';

@Component({
  selector: 'project-buttons',
  templateUrl: 'project/app/project/buttons/project-buttons.cmp.html'
})
export class ProjectButtonsCmp implements OnInit { 
  items: Project[]

  constructor(private router: Router, private projectSvc: ProjectSvc) { }

  getList() {
    this.projectSvc.getList({}).then(items => this.items = items);
  }

  ngOnInit() {
    this.getList();
  }
  
}