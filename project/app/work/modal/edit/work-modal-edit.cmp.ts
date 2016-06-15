import { Component, EventEmitter }       from '@angular/core'

import {UiSvc} from '../../../../service/ui.svc'
import {WorkInputsSvc} from '../../../../service/work/work-inputs.svc'

import {Work} from '../../../../service/work/work'
import {WorkSvc} from '../../../../service/work/work.svc'
import {WorkInputsCmp} from '../../inputs/work-inputs.cmp'

@Component({
  selector: 'work-modal-edit',
  templateUrl: 'project/app/work/modal/edit/work-modal-edit.cmp.html',
  directives: [WorkInputsCmp]
})
export class WorkModalEditCmp {

  constructor(private workSvc: WorkSvc, private uiSvc: UiSvc, private workInputsSvc: WorkInputsSvc) {
    workSvc.onEdit$.subscribe(item => this.onEdit(item))
    workSvc.onDeleted$.subscribe(item => this.uiSvc.hideModal('work-modal-edit'))
  }

  onEdit(item: Work) {
    this.workInputsSvc.onInit()

    this.workSvc.editItem = item
    this.workInputsSvc.spent_on_for_input = this.workSvc.getSpentOnForInput(item.spent_on)

    this.uiSvc.showModal('work-modal-edit', (action) => {
      if (action == 'delete') {
        this.workSvc.onDelete(this.workSvc.editItem)
        return false
      }
      return true
    }).then(
      action => {
        this.workSvc.editItem.spent_on = this.workSvc.getSpentOnFromInput(this.workInputsSvc.spent_on_for_input)
        this.workSvc.edit(this.workSvc.editItem)
      }, action => { })
  }
}