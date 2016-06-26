import { Component, EventEmitter }       from '@angular/core'

import { ComponentHelper }     from '../../../../helpers'

import { SemanticUiModal } from '../../../../ui/semantic-ui'

import {WorkSvc, Work} from '../../../../service/work'

import {WorkInputsCmp} from '../../inputs/work-inputs.cmp'

@Component(ComponentHelper.getInstance().updateTemplate({
  moduleId: module.id,
  selector: 'work-modal-delete',
  templateUrl: './work-modal-delete.cmp.html',
  directives: [WorkInputsCmp]
},require))
export class WorkModalDeleteCmp {
  private item:Work
  constructor(private workSvc: WorkSvc, private modal: SemanticUiModal) {
    workSvc.onDelete$.subscribe(item => this.onDelete(item))
  }

  onDelete(item: Work) {
    this.item = item

    this.modal.show('work-modal-delete').then(
      action => {
        this.workSvc.delete(this.item)
      }, action => { })
  }
}