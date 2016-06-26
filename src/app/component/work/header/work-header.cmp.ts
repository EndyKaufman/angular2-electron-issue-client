import { Component }       from '@angular/core'

import {TaskSvc} from '../../../service/task'

@Component({
  selector: 'work-header',
  template: require('./work-header.cmp.html')
})
export class WorkHeaderCmp {
  constructor(private taskSvc: TaskSvc) { }
}