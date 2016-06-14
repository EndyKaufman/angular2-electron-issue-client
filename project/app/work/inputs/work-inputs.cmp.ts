import { Component, Input }       from '@angular/core'

import {WorkSvc} from '../../../service/work/work.svc'

@Component({
  selector: 'work-inputs',
  templateUrl: 'project/app/work/inputs/work-inputs.cmp.html'
})
export class WorkInputsCmp {
  @Input()
  projects: any = {}
  @Input()
  tasksByProject: any = {}
  @Input()
  workTypesByProject: any = {}

  constructor(private workSvc: WorkSvc) { }
  
  onChangeProject() {
    this.workSvc.editItem.task_id = 0
    this.workSvc.editItem.work_type_id = this.workTypesByProject[this.workSvc.editItem.project_id][0].id
  }

  onChangeTask() {
    this.workSvc.editItem.work_type_id = this.workTypesByProject[this.workSvc.editItem.project_id][0].id
  }
}