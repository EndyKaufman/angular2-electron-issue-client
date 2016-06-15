import { Component, EventEmitter }       from '@angular/core'

import {UiSvc} from '../../../../service/ui.svc'
import {WorkInputsSvc} from '../../../../service/work/work-inputs.svc'

import {WorkSvc} from '../../../../service/work/work.svc'
import {ProjectSvc} from '../../../../service/project/project.svc'
import {TaskSvc} from '../../../../service/task/task.svc'

import {WorkInputsCmp} from '../../inputs/work-inputs.cmp'

@Component({
  selector: 'work-modal-create',
  templateUrl: 'project/app/work/modal/create/work-modal-create.cmp.html',
  directives: [WorkInputsCmp]
})
export class WorkModalCreateCmp {

  constructor(private projectSvc: ProjectSvc, private taskSvc: TaskSvc, private workSvc: WorkSvc, private uiSvc: UiSvc, private workInputsSvc: WorkInputsSvc) {
    workSvc.onCreate$.subscribe(active => this.onCreate())
  }

  onCreate() {
    this.workInputsSvc.onInit()

    if (this.projectSvc.selectedItem.id)
      this.workSvc.editItem.project_id = this.projectSvc.selectedItem.id
    if (this.taskSvc.selectedItem.id)
      this.workSvc.editItem.task_id = this.taskSvc.selectedItem.id
    if (this.workSvc.filteredWorkType.length)
      this.workSvc.editItem.work_type_id = this.workSvc.filteredWorkType[0]
    this.workInputsSvc.spent_on_for_input = ''

    this.uiSvc.showModal('work-modal-create').then(action => {
      this.workSvc.editItem.spent_on = this.workSvc.getSpentOnFromInput(this.workInputsSvc.spent_on_for_input)
      this.workSvc.create(this.workSvc.editItem)
    }, action => { })
  }
}