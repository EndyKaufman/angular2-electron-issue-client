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

    getItemsFilteredByWorkType() {
        return this.items.filter(item => item && this.isFilterWorkType(item.work_type_id))
    }

    isFilterWorkType(work_type_id: number) {
        return this.filteredWorkType && (this.filteredWorkType.indexOf(work_type_id) != -1 || work_type_id==0)
    }

    getSpentOn(item: Work) {
        let d = new Date(item.spent_on)
        let curr_date = d.getDate();
        let curr_month = d.getMonth() + 1;
        let curr_year = d.getFullYear();
        return curr_date + '.' + curr_month + '.' + curr_year;
    }

    onFilterWorkType(work_type_id: number) {
        let index = this.filteredWorkType.indexOf(work_type_id)
        if (index == -1)
            this.filteredWorkType.push(work_type_id)
        else {
            this.filteredWorkType.splice(index, 1)
            for (let item of this.items) {
                if (item.work_type_id == work_type_id)
                    this.unCheckIfChecked(item)
            }
        }
    }

    onCreate() {
        this.editItem = new Work()
        super.onCreate()
    }

    create(item: Work) {
        if (item.project_id)
            item.project_id = parseInt(item.project_id)
        else
            item.project_id = 0
        if (item.task_id)
            item.task_id = parseInt(item.task_id)
        else
            item.task_id = 0
        if (item.work_type_id)
            item.work_type_id = parseInt(item.work_type_id)
        else
            item.work_type_id = 0
        super.create(item)
    }
}