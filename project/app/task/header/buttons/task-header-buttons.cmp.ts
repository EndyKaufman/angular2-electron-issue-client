import { Component }       from '@angular/core'

import {StatusSvc} from '../../../../service/status/status.svc'
import {ProjectSvc} from '../../../../service/project/project.svc'
import {TaskSvc} from '../../../../service/task/task.svc'

@Component({
  selector: 'task-header-buttons',
  templateUrl: 'project/app/task/header/buttons/task-header-buttons.cmp.html'
})
export class TaskHeaderButtonsCmp {
  firstUpdateFilteredStatus: boolean = true
  constructor(private projectSvc: ProjectSvc, private statusSvc: StatusSvc, private taskSvc: TaskSvc) {
    this.projectSvc.itemSelected$.subscribe(item => this.updateFilteredStatus())
    this.projectSvc.itemChecked$.subscribe(items => this.updateFilteredStatus())
  }
  updateFilteredStatus() {
    if (!this.firstUpdateFilteredStatus)
      return
    this.firstUpdateFilteredStatus = false
    for (let status_id of this.projectSvc.checkedProjectsStatusIds) {
      this.taskSvc.onFilterStatus(status_id)
    }
  }
}