import { Component, Input, EventEmitter}       from '@angular/core'

import {ProjectSvc} from '../../../service/project'
import {Work} from '../../../service/work'

@Component({
  selector: 'work-inputs',
  template: require('./work-inputs.cmp.html')
})
export class WorkInputsCmp {
  @Input()
  private item:Work

  constructor(private projectSvc: ProjectSvc) {
  }

  onChangeProject() {
    this.item.task_id = 0
    this.onChangeTask()
  }

  onChangeTask() {
    let work_types=this.projectSvc.getWorkTypesByProjectId(this.item.project_id)
    if (work_types && work_types.length)
      this.item.work_type_id = work_types[0].id
    else
      this.item.work_type_id =0
  }
}