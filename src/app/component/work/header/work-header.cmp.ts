import { Component }       from '@angular/core'

import { ComponentHelper }     from '../../../helpers'

import {TaskSvc} from '../../../service/task'

@Component(ComponentHelper.getInstance().updateTemplate({
  moduleId: module.id,
  selector: 'work-header',
  templateUrl: './work-header.cmp.html'
},require))
export class WorkHeaderCmp {
  constructor(private taskSvc: TaskSvc) { }
}