import { Component }       from '@angular/core';

import { HeaderCmp }     from './header/header.cmp';
import { ProjectButtonsCmp } from './project/buttons/project-buttons.cmp';
import { TaskCmp }     from './task/task.cmp';
import { WorkCmp }     from './work/work.cmp';

@Component({
  selector: 'app',
  templateUrl: 'project/app/app.cmp.html',
  directives: [HeaderCmp, ProjectButtonsCmp, TaskCmp, WorkCmp]
})
export class AppCmp {
}