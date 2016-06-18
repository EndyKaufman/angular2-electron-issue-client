import { Component, OnInit } from '@angular/core'
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated'

import { SemanticUiModal, SEMANTIC_UI_PROVIDERS } from '../../ui/semantic-ui'

import { StatusSvc, STATUS_PROVIDERS }     from '../../service/status'
import { WorkTypeSvc, WORK_TYPE_PROVIDERS }     from '../../service/work-type'

import { ProjectSvc, PROJECT_PROVIDERS} from '../../service/project'
import { TaskSvc, TASK_PROVIDERS} from '../../service/task'
import { WorkSvc, WORK_PROVIDERS} from '../../service/work'

import { HeaderLogoCmp }     from '../header'
import { ProjectButtonsCmp } from '../project'
import { TaskCmp }     from '../task'
import { WorkCmp }     from '../work'

@Component({
  selector: 'app',
  templateUrl: 'project/component/app/app.cmp.html',
  directives: [HeaderLogoCmp, ProjectButtonsCmp, TaskCmp, WorkCmp, ROUTER_DIRECTIVES],
  providers: [
    SEMANTIC_UI_PROVIDERS,
    ROUTER_PROVIDERS,     
    STATUS_PROVIDERS,
    WORK_TYPE_PROVIDERS,   
    PROJECT_PROVIDERS,
    TASK_PROVIDERS,
    WORK_PROVIDERS
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