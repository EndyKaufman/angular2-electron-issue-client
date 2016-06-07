import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import {Task} from '../../../service/task/task';
import {TaskSvc} from '../../../service/task/task.svc';
import {ProjectSvc} from '../../../service/project/project.svc';

@Component({
  selector: 'task-list',
  templateUrl: 'project/app/task/list/task-list.cmp.html'
})
export class TaskListCmp implements OnInit {
  items: Task[];

  constructor(private router: Router, private taskSvc: TaskSvc, private projectSvc: ProjectSvc) {
    projectSvc.itemSelected$.subscribe(item => this.onProjectSelected(item));
  }

  getList() {
    let query = {}
    if (this.projectSvc.selectedItem) {
      query = {
        project_id: this.projectSvc.selectedItem.id
      };
    } else {
      query = {
        project_id: -1
      };
    }
    this.taskSvc.itemsLoaded = false;
    this.taskSvc.getList(query).then(items => this.items = items);
  };

  ngOnInit() {
    this.getList();
  };

  onProjectSelected(project: any) {
    this.getList();
  }
}