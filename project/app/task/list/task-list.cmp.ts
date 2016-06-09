import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router-deprecated'

import {StatusSvc} from '../../../service/status/status.svc'
import {TaskSvc} from '../../../service/task/task.svc'
import {ProjectSvc} from '../../../service/project/project.svc'

@Component({
  selector: 'task-list',
  templateUrl: 'project/app/task/list/task-list.cmp.html'
})
export class TaskListCmp implements OnInit {

  constructor(private router: Router, private taskSvc: TaskSvc, private projectSvc: ProjectSvc, private statusSvc: StatusSvc) {
    projectSvc.itemSelected$.subscribe(item => this.onProjectSelected(item))
    projectSvc.itemChecked$.subscribe(items => this.onProjectChecked(items))
  }

  getList() {
    let query = {}
    let checkedIds = this.projectSvc.getCheckedItemsIds()
    if (this.projectSvc.selectedItem.id) {
      query = {
        project_id: this.projectSvc.selectedItem.id
      }
    } else {
      if (checkedIds.length)
        query = { project_id: checkedIds.join('|') }
      else
        query = { project_id: -1 }
    }
    this.taskSvc.loaded = false
    this.taskSvc.getList(query)
  }

  ngOnInit() {
    //this.getList()
  }

  onProjectSelected(item: any) {
    this.getList()
  }

  onProjectChecked(item: any[]) {
    this.getList()
  }
}