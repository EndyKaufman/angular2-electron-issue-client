import { Component } from '@angular/core'

import { ComponentHelper }     from '../../../helpers'

import {InTaskListQuery} from '../../../interface/in-task-list-query'

import {StatusSvc} from '../../../service/status'
import {TaskSvc} from '../../../service/task'
import {ProjectSvc} from '../../../service/project'

@Component(ComponentHelper.getInstance().updateTemplate({
  moduleId: module.id,
  selector: 'task-list',
  templateUrl: './task-list.cmp.html'
},require))
export class TaskListCmp {

  private firstLoad: boolean = true
  constructor(private taskSvc: TaskSvc, private projectSvc: ProjectSvc, private statusSvc: StatusSvc) {
    projectSvc.itemSelected$.subscribe(item => { this.firstLoad = true; this.getList() })
    projectSvc.itemChecked$.subscribe(items => { this.firstLoad = true; this.getList() })
    taskSvc.onFiltered$.subscribe(items => this.getList())
  }

  getList() {
    console.log('TaskListCmp:getList')
    let query: InTaskListQuery={}
    let checkedIds = this.projectSvc.getCheckedItemsIds()
    if (this.projectSvc.selectedItem.id) {
      query.project_id='0|' + this.projectSvc.selectedItem.id
    } else {
      if (checkedIds.length)
        query.project_id= '0|' + checkedIds.join('|')
      else
        query.project_id= '0'
    }

    if (this.firstLoad) {
      this.taskSvc.filteredStatus = this.projectSvc.getCheckedsStatusIds()
      this.firstLoad = false
    }

    if (this.taskSvc.filteredStatus.length)
      query.status_id = this.taskSvc.filteredStatus.join('|')
    else
      query.status_id = '0'

    this.taskSvc.loaded = false
    this.taskSvc.getList(query)
  }

}