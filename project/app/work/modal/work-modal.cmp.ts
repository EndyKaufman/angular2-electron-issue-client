import { Component }       from '@angular/core'

import {WorkSvc} from '../../../service/work/work.svc'
import {WorkModalCreateCmp} from './create/work-modal-create.cmp'

@Component({
  selector: 'work-modal',
  templateUrl: 'project/app/work/modal/work-modal.cmp.html',
  directives: [WorkModalCreateCmp]
})
export class WorkModalCmp {
  constructor(private workSvc: WorkSvc) { }
}