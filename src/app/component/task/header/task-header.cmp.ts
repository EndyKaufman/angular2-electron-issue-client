import { Component }       from '@angular/core'

import {ProjectSvc} from '../../../service/project'
import {Status} from '../../../service/status'

@Component({
  selector: 'task-header',
  template: require('./task-header.cmp.html')
})
export class TaskHeaderCmp {
  constructor(private projectSvc: ProjectSvc) {
  }
}