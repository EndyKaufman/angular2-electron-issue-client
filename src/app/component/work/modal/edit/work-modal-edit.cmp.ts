import { Component, EventEmitter }       from '@angular/core'

import { ComponentHelper }     from '../../../../helpers'

import { SemanticUiModal } from '../../../../ui/semantic-ui'

import {WorkSvc, Work} from '../../../../service/work'
import {WorkInputsCmp} from '../../inputs/work-inputs.cmp'

@Component(ComponentHelper.getInstance().updateTemplate({
  moduleId: module.id,
  selector: 'work-modal-edit',
  templateUrl: './work-modal-edit.cmp.html',
  directives: [WorkInputsCmp]
},require))
export class WorkModalEditCmp {
  private item: Work
  private spent_on_for_input: string

  constructor(private workSvc: WorkSvc, private modal: SemanticUiModal) {
    workSvc.onEdit$.subscribe(item => this.onEdit(item))
    workSvc.onDeleted$.subscribe(item => this.modal.hide('work-modal-edit'))
  }

  onEdit(item: Work) {
    this.item = item
    this.item.spent_on_for_input = this.workSvc.getSpentOnForInput(item.spent_on)
    this.modal.show('work-modal-edit', (action) => {
      if (action == 'delete') {
        this.workSvc.onDelete(this.item)
        return false
      }
      return true
    }).then(
      action => {
        this.item.spent_on = this.workSvc.getSpentOnFromInput(this.item.spent_on_for_input)
        this.workSvc.edit(this.item)
      }, action => { })
  }
}