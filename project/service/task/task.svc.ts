import { Injectable }    from '@angular/core'
import { Http } from '@angular/http'

import 'rxjs/add/operator/toPromise'

import { ItemsSvc } from '../items.svc'
import { TaskResourceSvc } from './task-resource.svc'
import { Task } from './task'

@Injectable()
export class TaskSvc extends ItemsSvc {
    items: Task[] = []
    selectedItem: Task
    resource: TaskResourceSvc
    checkedsTitle: string

    filteredStatus: number[] = []

    constructor(public http: Http) {
        super(http)
        this.selectedItem = new Task();
        this.resource = new TaskResourceSvc(http)

        this.itemSelected$.subscribe(item => {
            this.updateCheckedsTitle()
        })
        this.itemChecked$.subscribe(items => {
            this.updateCheckedsTitle()
        })
    }

    updateCheckedsTitle() {
        this.checkedsTitle = this.selectedItem.title ? this.getTitle(this.selectedItem) : this.checkedItems.map(item => this.getTitle(item)).join(', ')
    }

    getTitle(item: Task) {
        if (item)
            return '#' + item.id
        return 'No task'
    }

    getList(query: any): Promise<Task[]> {
        return super.getList(query)
    }

    isFilterStatus(status_id: number) {
        return this.filteredStatus && (this.filteredStatus.indexOf(status_id) != -1 || status_id == 0)
    }

    onFilterStatus(status_id: number) {
        let index = this.filteredStatus.indexOf(status_id)
        if (index == -1)
            this.filteredStatus.push(status_id)
        else {
            this.filteredStatus.splice(index, 1)
        }
        this.onFiltered$.emit(true)
    }
}