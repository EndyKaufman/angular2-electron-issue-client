import { Component }       from '@angular/core'

import { ProjectSvc } from '../../service/project'

import { TaskHeaderCmp } from './header/task-header.cmp'
import { TaskHeaderButtonsCmp } from './header/buttons/task-header-buttons.cmp'
import { TaskListCmp } from './list/task-list.cmp'

@Component({
  selector: 'task',
  template: require('./task.cmp.html'),
  directives: [TaskHeaderCmp, TaskHeaderButtonsCmp, TaskListCmp]
})
export class TaskCmp {
  constructor(private projectSvc: ProjectSvc) {

  }
}