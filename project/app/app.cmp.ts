import { Component, OnInit } from '@angular/core'
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated'

import { SemanticUiModal, SEMANTIC_UI_PROVIDERS } from '../ui/semantic-ui'

import { StatusSvc }     from '../service/status/status.svc'
import { WorkTypeSvc }     from '../service/work-type/work-type.svc'

import { ProjectSvc} from '../service/project/project.svc'
import { TaskSvc} from '../service/task/task.svc'
import { WorkSvc} from '../service/work/work.svc'

import { HeaderLogoCmp }     from './header/logo/header-logo.cmp'
import { ProjectButtonsCmp } from './project/buttons/project-buttons.cmp'
import { TaskCmp }     from './task/task.cmp'
import { WorkCmp }     from './work/work.cmp'

@Component({
  selector: 'app',
  templateUrl: 'project/app/app.cmp.html',
  directives: [HeaderLogoCmp, ProjectButtonsCmp, TaskCmp, WorkCmp, ROUTER_DIRECTIVES],
  providers: [
    SEMANTIC_UI_PROVIDERS,
    ROUTER_PROVIDERS,     
    StatusSvc,
    WorkTypeSvc,   
    ProjectSvc,
    TaskSvc,
    WorkSvc
  ]
})
export class AppCmp implements OnInit {

  constructor(private taskSvc: TaskSvc, private statusSvc: StatusSvc, private workTypeSvc: WorkTypeSvc) {

  }

  getStatusList() {
    this.statusSvc.loaded = false
    this.statusSvc.getList({})
  }
    
  getWorkTypeList() {
    this.workTypeSvc.loaded = false
    this.workTypeSvc.getList({})
  }

  ngOnInit() {
    this.getStatusList()
    this.getWorkTypeList()
  }
}