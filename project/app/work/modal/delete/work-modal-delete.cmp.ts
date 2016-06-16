import { Component, EventEmitter }       from '@angular/core'

import { SemanticUiModal } from '../../../../ui/semantic-ui'

import {Work} from '../../../../service/work/work'

import {WorkSvc} from '../../../../service/work/work.svc'

import {WorkInputsCmp} from '../../inputs/work-inputs.cmp'

@Component({
  selector: 'work-modal-delete',
  templateUrl: 'project/app/work/modal/delete/work-modal-delete.cmp.html',
  directives: [WorkInputsCmp]
})
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