import { Component }       from '@angular/core'
import { Router } from '@angular/router-deprecated'

import {ProjectSvc} from '../../../service/project/project.svc'

@Component({
  selector: 'task-header',
  templateUrl: 'project/app/task/header/task-header.cmp.html'
})
export class TaskHeaderCmp {
  constructor(private router: Router, private projectSvc: ProjectSvc) { }
}