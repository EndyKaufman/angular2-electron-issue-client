import { Component, OnInit } from '@angular/core'
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated'

import { ProjectSvc} from '../service/project/project.svc'
import { TaskSvc} from '../service/task/task.svc'
import { WorkSvc} from '../service/work/work.svc'
import { StatusSvc }     from '../service/status/status.svc'

import { HeaderLogoCmp }     from './header/logo/header-logo.cmp'
import { ProjectButtonsCmp } from './project/buttons/project-buttons.cmp'
import { TaskCmp }     from './task/task.cmp'
import { WorkCmp }     from './work/work.cmp'

@Component({
  selector: 'app',
  templateUrl: 'project/app/app.cmp.html',
  directives: [HeaderLogoCmp, ProjectButtonsCmp, TaskCmp, WorkCmp, ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    ProjectSvc,
    TaskSvc,
    WorkSvc,
    StatusSvc
  ]
})
export class AppCmp implements OnInit {

  constructor(private projectSvc: ProjectSvc, private taskSvc: TaskSvc, private workSvc: WorkSvc, private statusSvc: StatusSvc) {

  }

  getStatusList() {
    this.statusSvc.loaded = false
    this.statusSvc.getList({})
  }

  ngOnInit() {
    this.getStatusList()
  }
}