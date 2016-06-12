import { Component, OnInit } from '@angular/core'

import { WorkSvc } from '../../../service/work/work.svc'
import { TaskSvc } from '../../../service/task/task.svc'
import { WorkTypeSvc } from '../../../service/work-type/work-type.svc'

@Component({
  selector: 'work-list',
  templateUrl: 'project/app/work/list/work-list.cmp.html'
})
export class WorkListCmp implements OnInit {

  constructor(private workSvc: WorkSvc, private taskSvc: TaskSvc, private workTypeSvc: WorkTypeSvc) {
    taskSvc.itemSelected$.subscribe(item => this.onTaskSelected(item))
    taskSvc.itemChecked$.subscribe(items => this.onTaskSelected(items))
  }

  getList() {
    let query = {}
    let checkedIds = this.taskSvc.getCheckedItemsIds()
    if (this.taskSvc.selectedItem.id) {
      query = {
        task_id: this.taskSvc.selectedItem.id
      }
    } else {
      if (checkedIds.length)
        query = { task_id: checkedIds.join('|') }
      else
        query = { task_id: -1 }
    }
    this.workSvc.loaded = false
    this.workSvc.getList(query)
  }

  ngOnInit() {
    //this.getList()
  }

  onTaskSelected(project: any) {
    this.getList()
  }
}