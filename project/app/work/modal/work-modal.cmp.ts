import { Component }       from '@angular/core'

import {WorkSvc} from '../../../service/work/work.svc'
import {WorkModalCreateCmp} from './create/work-modal-create.cmp'
import {WorkModalEditCmp} from './edit/work-modal-edit.cmp'

@Component({
  selector: 'work-modal',
  templateUrl: 'project/app/work/modal/work-modal.cmp.html',
  directives: [WorkModalCreateCmp, WorkModalEditCmp]
})
export class WorkModalCmp {
  constructor(private workSvc: WorkSvc) { }
}