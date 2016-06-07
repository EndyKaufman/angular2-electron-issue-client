import { Component }       from '@angular/core'
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated'

import { ProjectSvc} from '../service/project/project.svc'
import { TaskSvc} from '../service/task/task.svc'

import { HeaderCmp }     from './header/header.cmp'
import { ProjectButtonsCmp } from './project/buttons/project-buttons.cmp'
import { TaskCmp }     from './task/task.cmp'
import { WorkCmp }     from './work/work.cmp'

@Component({
  selector: 'app',
  templateUrl: 'project/app/app.cmp.html',
  directives: [HeaderCmp, ProjectButtonsCmp, TaskCmp, WorkCmp, ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    ProjectSvc,
    TaskSvc
  ]
})
export class AppCmp {
}