import { Component }       from '@angular/core'

import { TaskSvc } from '../../service/task'
import { WorkHeaderCmp } from './header/work-header.cmp'
import { WorkHeaderButtonsCmp } from './header/buttons/work-header-buttons.cmp'
import { WorkListCmp } from './list/work-list.cmp'
import { WorkModalCmp } from './modal/work-modal.cmp'

@Component({
  selector: 'work',
  templateUrl: 'project/component/work/work.cmp.html',
  directives: [WorkHeaderCmp, WorkHeaderButtonsCmp, WorkListCmp, WorkModalCmp]
})
export class WorkCmp {
  constructor(private taskSvc: TaskSvc) {
  }
}