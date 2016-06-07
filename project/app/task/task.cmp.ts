import { Component }       from '@angular/core'

import { TaskHeaderCmp } from './header/task-header.cmp'
import { TaskListCmp } from './list/task-list.cmp'

@Component({
  selector: 'task',
  templateUrl: 'project/app/task/task.cmp.html',
  directives: [TaskHeaderCmp, TaskListCmp]
})
export class TaskCmp {
}