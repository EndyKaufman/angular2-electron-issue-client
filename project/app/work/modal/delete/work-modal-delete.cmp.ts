import { Component, EventEmitter }       from '@angular/core'

import {UiSvc} from '../../../../service/ui.svc'
import {WorkInputsSvc} from '../../../../service/work/work-inputs.svc'

import {Work} from '../../../../service/work/work'

import {WorkSvc} from '../../../../service/work/work.svc'

import {WorkInputsCmp} from '../../inputs/work-inputs.cmp'

@Component({
  selector: 'work-modal-delete',
  templateUrl: 'project/app/work/modal/delete/work-modal-delete.cmp.html',
  directives: [WorkInputsCmp]
})
export class WorkModalDeleteCmp {

  constructor(private workSvc: WorkSvc, private uiSvc: UiSvc, private workInputsSvc: WorkInputsSvc) {
    workSvc.onDelete$.subscribe(item => this.onDelete(item))
  }

  onDelete(item: Work) {
    this.workInputsSvc.onInit()

    this.workSvc.editItem = item

    this.uiSvc.showModal('work-modal-delete').then(
      action => {
        this.workSvc.delete(this.workSvc.editItem)
      }, action => { })
  }
}