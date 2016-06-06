import { Component }       from '@angular/core';

import { WorkHeaderCmp } from './header/work-header.cmp';
import { WorkListCmp } from './list/work-list.cmp';

@Component({
  selector: 'work',
  templateUrl: 'project/app/work/work.cmp.html',
  directives: [WorkHeaderCmp, WorkListCmp]
})
export class WorkCmp {
}