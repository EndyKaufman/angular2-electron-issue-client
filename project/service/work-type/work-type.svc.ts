import { Injectable }    from '@angular/core'
import { Http } from '@angular/http'

import 'rxjs/add/operator/toPromise'

import { ItemsSvc } from '../items.svc'
import { WorkTypeResourceSvc } from './work-type-resource.svc'
import { WorkType } from './work-type'

@Injectable()
export class WorkTypeSvc extends ItemsSvc {
    items: WorkType[] = []
    selectedItem: WorkType
    resource: WorkTypeResourceSvc

    constructor(public http: Http) {
        super(http)
        this.selectedItem = new WorkType();
        this.resource = new WorkTypeResourceSvc(http)
    }

    getList(query: any): Promise<WorkType[]> {
        return super.getList(query)
    }
}