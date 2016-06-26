import { Component }       from '@angular/core'

import {StatusSvc} from '../../../../service/status'
import {ProjectSvc} from '../../../../service/project'
import {TaskSvc} from '../../../../service/task'

@Component({
  selector: 'task-header-buttons',
  template: require('./task-header-buttons.cmp.html')
})
export class TaskHeaderButtonsCmp {
  constructor(private projectSvc: ProjectSvc, private statusSvc: StatusSvc, private taskSvc: TaskSvc) {
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