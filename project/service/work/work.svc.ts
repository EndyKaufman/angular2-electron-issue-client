import { Injectable }    from '@angular/core'
import { Http } from '@angular/http'

import 'rxjs/add/operator/toPromise'

import { ItemsSvc } from '../items.svc'
import { WorkResourceSvc } from './work-resource.svc'
import { Work } from './work'

@Injectable()
export class WorkSvc extends ItemsSvc {
    items: Work[] = []
    selectedItem: Work
    resource: WorkResourceSvc
    editItem: Work

    filteredWorkType: number[] = []

    constructor(public http: Http) {
        super(http)
        this.selectedItem = new Work()
        this.resource = new WorkResourceSvc(http)
    }

    getList(query: any): Promise<Work[]> {
        return super.getList(query)
    }

    isFilterWorkType(work_type_id: number): boolean {
        return this.filteredWorkType && (this.filteredWorkType.indexOf(work_type_id) != -1 || work_type_id == 0)
    }

    getSpentOnAsString(spent_on: string): string {
        if (spent_on == '')
            return spent_on
        let d = new Date(spent_on)
        let curr_date = d.getDate()
        let curr_month = d.getMonth() + 1
        let curr_year = d.getFullYear()
        return (curr_date < 10 ? '0' : '') + curr_date + '.' + (curr_month < 10 ? '0' : '') + curr_month + '.' + curr_year
    }

    getSpentOnForInput(spent_on: string): string {
        if (spent_on == '')
            return spent_on
        let d = new Date(spent_on)
        let curr_date = d.getDate()
        let curr_month = d.getMonth() + 1
        let curr_year = d.getFullYear()
        return curr_year + '-' + (curr_month < 10 ? '0' : '') + curr_month + '-' + (curr_date < 10 ? '0' : '') + curr_date
    }

    getSpentOnFromInput(spent_on: string): string {
        if (spent_on == '')
            return spent_on
        let parts: string[] = spent_on.split("-")
        let d = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]))
        return d.toString()
    }

    onFilterWorkType(work_type_id: number) {
        let index = this.filteredWorkType.indexOf(work_type_id)
        if (index == -1)
            this.filteredWorkType.push(work_type_id)
        else {
            this.filteredWorkType.splice(index, 1)
        }
        this.onFiltered$.emit(true)
    }

    onEdit(item: Work) {
        this.editItem = item
        this.onEdit$.emit(item)
    }

    edit(item: Work) {
        if (item.project_id)
            item.project_id = +item.project_id
        else
            item.project_id = 0
        if (item.task_id)
            item.task_id = +item.task_id
        else
            item.task_id = 0
        if (item.work_type_id)
            item.work_type_id = +item.work_type_id
        else
            item.work_type_id = 0
        super.edit(item)
    }

    onCreate() {
        this.editItem = new Work()
        this.onCreate$.emit(true)
    }

    create(item: Work) {
        if (item.project_id)
            item.project_id = +item.project_id
        else
            item.project_id = 0
        if (item.task_id)
            item.task_id = +item.task_id
        else
            item.task_id = 0
        if (item.work_type_id)
            item.work_type_id = +item.work_type_id
        else
            item.work_type_id = 0
        super.create(item)
    }
}