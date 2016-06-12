import { Component }       from '@angular/core'

import {WorkTypeSvc} from '../../../../service/work-type/work-type.svc'
import {ProjectSvc} from '../../../../service/project/project.svc'
import {TaskSvc} from '../../../../service/task/task.svc'
import {WorkSvc} from '../../../../service/work/work.svc'

@Component({
  selector: 'work-header-buttons',
  templateUrl: 'project/app/work/header/buttons/work-header-buttons.cmp.html'
})
export class WorkHeaderButtonsCmp {
  firstUpdateFilteredWorkType: boolean = true
  constructor(private projectSvc: ProjectSvc, private taskSvc: TaskSvc, private workTypeSvc: WorkTypeSvc, private workSvc: WorkSvc) {
    this.taskSvc.itemSelected$.subscribe(item => this.updateFilteredWorkType())
    this.taskSvc.itemChecked$.subscribe(items => this.updateFilteredWorkType())
  }
  updateFilteredWorkType() {
    if (!this.firstUpdateFilteredWorkType)
      return
    this.firstUpdateFilteredWorkType = false
    for (let work_type_id of this.projectSvc.checkedsWorkTypeIds) {
      this.workSvc.onFilterWorkType(work_type_id)
    }
  }
  getWorkTypeButtonColor(work_type_id) {
    let color = this.workSvc.isFilterWorkType(work_type_id) ? '' : 'basic'
    if (this.taskSvc.selectedItem.id)
      color += ' blue'
    else
      if (!this.taskSvc.selectedItem.id)
        color += ' green'
    return color
  }
}