import { Component }       from '@angular/core'

import { ComponentHelper }     from '../../../helpers'

import {ProjectSvc} from '../../../service/project'
import {Status} from '../../../service/status'

@Component(ComponentHelper.getInstance().updateTemplate({
  moduleId: module.id,
  selector: 'task-header',
  templateUrl: './task-header.cmp.html'
},require))
export class TaskHeaderCmp {
  constructor(private projectSvc: ProjectSvc) {
  }
}