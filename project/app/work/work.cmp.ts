import { Component }       from '@angular/core'

import { TaskSvc } from '../../service/task/task.svc'
import { WorkHeaderCmp } from './header/work-header.cmp'
import { WorkHeaderButtonsCmp } from './header/buttons/work-header-buttons.cmp'
import { WorkListCmp } from './list/work-list.cmp'

@Component({
  selector: 'work',
  templateUrl: 'project/app/work/work.cmp.html',
  directives: [WorkHeaderCmp, WorkListCmp, WorkHeaderButtonsCmp]
})
export class WorkCmp {
  constructor(private taskSvc: TaskSvc) {
  }
}