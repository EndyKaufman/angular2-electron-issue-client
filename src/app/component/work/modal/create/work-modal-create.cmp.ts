import { Component, EventEmitter }       from '@angular/core'

import { SemanticUiModal } from '../../../../ui/semantic-ui'

import {WorkSvc, Work} from '../../../../service/work'
import {ProjectSvc} from '../../../../service/project'
import {TaskSvc} from '../../../../service/task'

import {WorkInputsCmp} from '../../inputs/work-inputs.cmp'

@Component({
  selector: 'work-modal-create',
  template: require('./work-modal-create.cmp.html'),
  directives: [WorkInputsCmp]
})
export class WorkModalCreateCmp {
  private item: Work
  private spent_on_for_input: string

  constructor(private projectSvc: ProjectSvc, private taskSvc: TaskSvc, private workSvc: WorkSvc, private modal: SemanticUiModal) {
    workSvc.onCreate$.subscribe(item => this.onCreate(item))
  }

  onCreate(item: Work) {
    if (this.projectSvc.selectedItem.id)
      item.project_id = this.projectSvc.selectedItem.id
    if (this.taskSvc.selectedItem.id)
      item.task_id = this.taskSvc.selectedItem.id
    if (this.workSvc.filteredWorkType.length)
      item.work_type_id = this.workSvc.filteredWorkType[0]
    this.item = item
    this.item.spent_on_for_input = ''

    this.modal.show('work-modal-create').then(action => {
      item.spent_on = this.workSvc.getSpentOnFromInput(this.item.spent_on_for_input)
      this.workSvc.create(this.item)
    }, action => { })
  }
}