import { Component }       from '@angular/core'

import {UiSvc} from '../../../../service/ui.svc'
import {WorkTypeSvc} from '../../../../service/work-type/work-type.svc'
import {ProjectSvc} from '../../../../service/project/project.svc'
import {TaskSvc} from '../../../../service/task/task.svc'
import {WorkSvc} from '../../../../service/work/work.svc'

@Component({
  selector: 'work-modal-create',
  templateUrl: 'project/app/work/modal/create/work-modal-create.cmp.html'
})
export class WorkModalCreateCmp {

  private tasksByProject: {}
  private workTypesByProject: {}

  constructor(private projectSvc: ProjectSvc, private taskSvc: TaskSvc, private workSvc: WorkSvc, private workTypeSvc: WorkTypeSvc, private uiSvc: UiSvc) {
    workSvc.onCreate$.subscribe(active => this.onCreate(active))
  }

  onCreate(active: boolean) {
    this.tasksByProject = { 0: [] }
    this.workTypesByProject = { 0: [] }
    for (let project of this.projectSvc.items) {
      this.tasksByProject[project.id] = this.taskSvc.items.filter(item => item.project_id == project.id)
      this.workTypesByProject[project.id] = this.workTypeSvc.items.filter(item => project.work_type.indexOf(item.id) != -1)
      if (!this.workSvc.editItem.project_id) {
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
    this.uiSvc.showModal('work-modal-create').then(el => {
      this.workSvc.create(this.workSvc.editItem)
    })
  }

  onChangeProject() {
    this.workSvc.editItem.task_id = 0
    this.workSvc.editItem.work_type_id = this.workTypesByProject[this.workSvc.editItem.project_id][0].id
  }

  onChangeTask() {
    this.workSvc.editItem.work_type_id = this.workTypesByProject[this.workSvc.editItem.project_id][0].id
  }
}