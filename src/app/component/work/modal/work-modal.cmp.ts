import { Component }       from '@angular/core'

import { ComponentHelper }     from '../../../helpers'

import {WorkSvc} from '../../../service/work'
import {WorkModalCreateCmp} from './create/work-modal-create.cmp'
import {WorkModalEditCmp} from './edit/work-modal-edit.cmp'
import {WorkModalDeleteCmp} from './delete/work-modal-delete.cmp'

@Component(ComponentHelper.getInstance().updateTemplate({
  moduleId: module.id,
  selector: 'work-modal',
  templateUrl: './work-modal.cmp.html',
  directives: [WorkModalCreateCmp, WorkModalEditCmp, WorkModalDeleteCmp]
},require))
export class WorkModalCmp {
  constructor(private workSvc: WorkSvc) { }
}