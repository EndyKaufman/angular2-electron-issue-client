import { Component }       from '@angular/core'

import { ComponentHelper }     from '../../../../helpers'

import {WorkTypeSvc} from '../../../../service/work-type'
import {ProjectSvc} from '../../../../service/project'
import {TaskSvc} from '../../../../service/task'
import {WorkSvc} from '../../../../service/work'

@Component(ComponentHelper.getInstance().updateTemplate({
  moduleId: module.id,
  selector: 'work-header-buttons',
  templateUrl: './work-header-buttons.cmp.html'
},require))
export class WorkHeaderButtonsCmp {
  constructor(private projectSvc: ProjectSvc, private taskSvc: TaskSvc, private workTypeSvc: WorkTypeSvc, private workSvc: WorkSvc) {
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