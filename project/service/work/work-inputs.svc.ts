import { Injectable}       from '@angular/core'


import {WorkTypeSvc} from '../work-type/work-type.svc'
import {ProjectSvc} from '../project/project.svc'
import {TaskSvc} from '../task/task.svc'
import {WorkSvc} from '../work/work.svc'

@Injectable()
export class WorkInputsSvc {
  projects: {}  
  tasksByProject: {}
  workTypesByProject: {}
  spent_on_for_input: string
  
  constructor(private projectSvc: ProjectSvc, private taskSvc: TaskSvc, private workSvc: WorkSvc, private workTypeSvc: WorkTypeSvc) { 
  }
  
  onInit() {
    this.projects = this.projectSvc.items
    this.tasksByProject = { 0: [] }
    this.workTypesByProject = { 0: [] }
    for (let project of this.projectSvc.items) {
      this.tasksByProject[project.id] = this.taskSvc.items.filter(item => item.project_id == project.id)
      this.workTypesByProject[project.id] = this.workTypeSvc.items.filter(item => project.work_type.indexOf(item.id) != -1)
    }

    if (this.projectSvc.items.length && !this.workSvc.editItem.project_id) {
      let project = this.projectSvc.items[0]
      this.workSvc.editItem.project_id = project.id
      if (this.tasksByProject[project.id][0])
        this.workSvc.editItem.task_id = this.tasksByProject[project.id][0].id
      else
        this.workSvc.editItem.task_id = 0
      if (this.workTypesByProject[project.id][0])
        this.workSvc.editItem.work_type_id = this.workTypesByProject[project.id][0].id
      else
        this.workSvc.editItem.work_type_id = 0
    }
  }
}