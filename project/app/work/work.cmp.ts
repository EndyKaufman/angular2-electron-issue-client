import { Component }       from '@angular/core'

import { TaskSvc } from '../../service/task/task.svc'
import { WorkSvc } from '../../service/work/work.svc'
import { WorkHeaderCmp } from './header/work-header.cmp'
import { WorkListCmp } from './list/work-list.cmp'

@Component({
  selector: 'work',
  templateUrl: 'project/app/work/work.cmp.html',
  directives: [WorkHeaderCmp, WorkListCmp]
})
export class WorkCmp {
  constructor(private taskSvc: TaskSvc, private workSvc: WorkSvc) {    
  }
}