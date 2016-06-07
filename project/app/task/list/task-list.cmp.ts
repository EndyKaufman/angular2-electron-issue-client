import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router-deprecated'

import {TaskSvc} from '../../../service/task/task.svc'
import {ProjectSvc} from '../../../service/project/project.svc'

@Component({
  selector: 'task-list',
  templateUrl: 'project/app/task/list/task-list.cmp.html'
})
export class TaskListCmp implements OnInit {

  constructor(private router: Router, private taskSvc: TaskSvc, private projectSvc: ProjectSvc) {
    projectSvc.itemSelected$.subscribe(item => this.onProjectSelected(item))
  }

  getList() {
    let query = {
      project_id: this.projectSvc.selectedItem.id
    }
    this.taskSvc.itemsLoaded = false
    this.taskSvc.getList(query)
  }

  ngOnInit() {
    this.getList()
  }

  onProjectSelected(project: any) {
    this.getList()
  }
}