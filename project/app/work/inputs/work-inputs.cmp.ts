import { Component, Input, EventEmitter}       from '@angular/core'

import {WorkInputsSvc} from '../../../service/work/work-inputs.svc'

import {WorkTypeSvc} from '../../../service/work-type/work-type.svc'
import {ProjectSvc} from '../../../service/project/project.svc'
import {TaskSvc} from '../../../service/task/task.svc'
import {WorkSvc} from '../../../service/work/work.svc'

@Component({
  selector: 'work-inputs',
  templateUrl: 'project/app/work/inputs/work-inputs.cmp.html'
})
export class WorkInputsCmp {  
  private tasksByProject: {}
  private workTypesByProject: {}
  
  constructor(private projectSvc: ProjectSvc, private taskSvc: TaskSvc, private workSvc: WorkSvc, private workTypeSvc: WorkTypeSvc, private workInputsSvc:WorkInputsSvc) { 
  }
  
  onChangeProject() {
    this.workSvc.editItem.task_id = 0
    this.workSvc.editItem.work_type_id = this.workInputsSvc.workTypesByProject[this.workSvc.editItem.project_id][0].id
  }

  onChangeTask() {
    this.workSvc.editItem.work_type_id = this.workInputsSvc.workTypesByProject[this.workSvc.editItem.project_id][0].id
  }
}