import { Component }       from '@angular/core'

import { ComponentHelper }     from '../../helpers'

import { ProjectSvc } from '../../service/project'

import { TaskHeaderCmp } from './header/task-header.cmp'
import { TaskHeaderButtonsCmp } from './header/buttons/task-header-buttons.cmp'
import { TaskListCmp } from './list/task-list.cmp'

@Component(ComponentHelper.getInstance().updateTemplate({
  moduleId: module.id,
  selector: 'task',
  templateUrl: './task.cmp.html',
  directives: [TaskHeaderCmp, TaskHeaderButtonsCmp, TaskListCmp]
},require))
export class TaskCmp {
  constructor(private projectSvc: ProjectSvc) {

  }
}