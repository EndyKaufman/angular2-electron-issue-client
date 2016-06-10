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
    for (let status_id of this.projectSvc.checkedsStatusIds) {
      this.taskSvc.onFilterStatus(status_id)
    }
  }
  getStatusButtonColor(status_id) {
    let color = this.taskSvc.isFilterStatus(status_id) ? this.statusSvc.getItemById(status_id).color : 'basic'
    if (color != 'blue' && this.projectSvc.selectedItem.id && !this.taskSvc.isFilterStatus(status_id))
      color += ' blue'
    else
      if (color != 'green' && !this.projectSvc.selectedItem.id && !this.taskSvc.isFilterStatus(status_id))
        color += ' green'
    return color
  }
}