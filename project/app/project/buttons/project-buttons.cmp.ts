import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router-deprecated'

import {ProjectSvc} from '../../../service/project/project.svc'

@Component({
  selector: 'project-buttons',
  templateUrl: 'project/app/project/buttons/project-buttons.cmp.html'
})
export class ProjectButtonsCmp implements OnInit {

  constructor(private router: Router, private projectSvc: ProjectSvc) { }

  getList() {
    this.projectSvc.getList({})
  }

  ngOnInit() {
    this.getList()
  }

}