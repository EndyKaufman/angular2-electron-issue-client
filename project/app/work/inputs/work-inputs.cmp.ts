import { Component, Input, EventEmitter}       from '@angular/core'

import {WorkTypeSvc} from '../../../service/work-type'
import {ProjectSvc} from '../../../service/project'
import {TaskSvc} from '../../../service/task'
import {WorkSvc, Work} from '../../../service/work'

@Component({
  selector: 'work-inputs',
  templateUrl: 'project/app/work/inputs/work-inputs.cmp.html'
})
export class WorkInputsCmp {    
  @Input()
  private item:Work
  
  constructor(private projectSvc: ProjectSvc, private taskSvc: TaskSvc, private workSvc: WorkSvc, private workTypeSvc: WorkTypeSvc) { 
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