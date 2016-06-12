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
        return this.filteredWorkType && this.filteredWorkType.indexOf(work_type_id) != -1
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
}