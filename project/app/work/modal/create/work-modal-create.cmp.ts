import { Component }       from '@angular/core'

import {UiSvc} from '../../../../service/ui.svc'
import {WorkSvc} from '../../../../service/work/work.svc'

@Component({
  selector: 'work-modal-create',
  templateUrl: 'project/app/work/modal/create/work-modal-create.cmp.html'
})
export class WorkModalCreateCmp {
  constructor(private workSvc: WorkSvc, private uiSvc:UiSvc) { 
    workSvc.onCreate$.subscribe(active => this.onCreate(active))
  }
  onCreate(active:boolean){
    this.uiSvc.showModal('work-modal-create')
  }
}