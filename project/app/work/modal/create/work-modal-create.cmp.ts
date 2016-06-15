import { Component, EventEmitter }       from '@angular/core'

import {UiSvc} from '../../../../service/ui.svc'

import {WorkSvc} from '../../../../service/work/work.svc'
import {Work} from '../../../../service/work/work'
import {ProjectSvc} from '../../../../service/project/project.svc'
import {TaskSvc} from '../../../../service/task/task.svc'

import {WorkInputsCmp} from '../../inputs/work-inputs.cmp'

@Component({
  selector: 'work-modal-create',
  templateUrl: 'project/app/work/modal/create/work-modal-create.cmp.html',
  directives: [WorkInputsCmp]
})
export class WorkModalCreateCmp {
  private item: Work
  private spent_on_for_input: string

  constructor(private projectSvc: ProjectSvc, private taskSvc: TaskSvc, private workSvc: WorkSvc, private uiSvc: UiSvc) {
    workSvc.onCreate$.subscribe(item => this.onCreate(item))
  }

  onCreate(item: Work) {
    if (this.projectSvc.selectedItem.id)
      item.project_id = this.projectSvc.selectedItem.id
    if (this.taskSvc.selectedItem.id)
      item.task_id = this.taskSvc.selectedItem.id
    if (this.workSvc.filteredWorkType.length)
      item.work_type_id = this.workSvc.filteredWorkType[0]
    this.item = item
    this.item.spent_on_for_input = ''
    this.uiSvc.showModal('work-modal-create').then(action => {
      item.spent_on = this.workSvc.getSpentOnFromInput(this.item.spent_on_for_input)
      this.workSvc.create(this.item)
    }, action => { })
  }
}