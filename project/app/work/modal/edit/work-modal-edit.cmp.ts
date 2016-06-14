import { Component, EventEmitter }       from '@angular/core'

import {UiSvc} from '../../../../service/ui.svc'
import {WorkInputsSvc} from '../../../../service/work/work-inputs.svc'

import {Work} from '../../../../service/work/work'

import {WorkSvc} from '../../../../service/work/work.svc'
import {ProjectSvc} from '../../../../service/project/project.svc'
import {TaskSvc} from '../../../../service/task/task.svc'

import {WorkInputsCmp} from '../../inputs/work-inputs.cmp'

@Component({
  selector: 'work-modal-edit',
  templateUrl: 'project/app/work/modal/edit/work-modal-edit.cmp.html',
  directives: [WorkInputsCmp]
})
export class WorkModalEditCmp {

  constructor(private projectSvc: ProjectSvc, private taskSvc: TaskSvc, private workSvc: WorkSvc, private uiSvc: UiSvc, private workInputsSvc: WorkInputsSvc) {
    workSvc.onEdit$.subscribe(item => this.onEdit(item))
  }

  onEdit(item: Work) {
    this.workInputsSvc.onInit()

    this.workSvc.editItem = item
    this.workInputsSvc.spent_on_for_input = this.workSvc.getSpentOnForInput(item.spent_on)

    this.uiSvc.showModal('work-modal-edit').then(el => {
      console.log(this.workInputsSvc.spent_on_for_input)
      this.workSvc.editItem.spent_on = this.workSvc.getSpentOnFromInput(this.workInputsSvc.spent_on_for_input)
      this.workSvc.edit(this.workSvc.editItem)
    })
  }
}