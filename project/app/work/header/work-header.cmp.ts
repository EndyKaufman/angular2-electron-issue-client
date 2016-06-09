import { Component }       from '@angular/core'

import {TaskSvc} from '../../../service/task/task.svc'

@Component({
  selector: 'work-header',
  templateUrl: 'project/app/work/header/work-header.cmp.html'
})
export class WorkHeaderCmp {
  constructor(private taskSvc: TaskSvc) { }
}