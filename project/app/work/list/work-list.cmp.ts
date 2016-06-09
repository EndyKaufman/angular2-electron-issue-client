import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router-deprecated'

import {WorkSvc} from '../../../service/work/work.svc'
import {TaskSvc} from '../../../service/task/task.svc'

@Component({
  selector: 'work-list',
  templateUrl: 'project/app/work/list/work-list.cmp.html'
})
export class WorkListCmp implements OnInit {

  constructor(private router: Router, private workSvc: WorkSvc, private taskSvc: TaskSvc) {
    taskSvc.itemSelected$.subscribe(item => this.onTaskSelected(item))
  }

  getList() {
    let query = {
      task_id: this.taskSvc.selectedItem.id
    }
    this.workSvc.loaded = false
    this.workSvc.getList(query)
  }

  ngOnInit() {
    this.getList()
  }

  onTaskSelected(project: any) {
    this.getList()
  }
}