import { Component, OnInit } from '@angular/core'

import { ComponentHelper }     from '../../../helpers'

import {ProjectSvc} from '../../../service/project'

@Component(ComponentHelper.getInstance().updateTemplate({
  moduleId: module.id,
  selector: 'project-buttons',
  templateUrl: './project-buttons.cmp.html'
},require))
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