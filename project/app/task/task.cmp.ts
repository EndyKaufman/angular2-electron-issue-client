import { Component }       from '@angular/core'
import { Router } from '@angular/router-deprecated'

import {ProjectSvc} from '../../service/project/project.svc'
import { TaskHeaderCmp } from './header/task-header.cmp'
import { TaskListCmp } from './list/task-list.cmp'

@Component({
  selector: 'task',
  templateUrl: 'project/app/task/task.cmp.html',
  directives: [TaskHeaderCmp, TaskListCmp]
})
export class TaskCmp {
  constructor(private router: Router, private projectSvc: ProjectSvc) {
    
  }
}