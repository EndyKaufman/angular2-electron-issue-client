import { Component, OnInit } from '@angular/core'

import {ProjectSvc} from '../../../service/project'

@Component({
  selector: 'project-buttons',
  template: require('./project-buttons.cmp.html')
})
export class ProjectButtonsCmp implements OnInit {

  constructor(private projectSvc: ProjectSvc) {
  }

  getList() {
    this.projectSvc.getList({})
  }

  ngOnInit() {
    this.getList()
  }

}