import { Injectable }    from '@angular/core'
import { Http } from '@angular/http'

import 'rxjs/add/operator/toPromise'

import { ItemsSvc } from '../../class/items.svc'
import { WorkTypeResourceHttpSvc } from './work-type-resource-http.svc'
import { WorkType } from './work-type'

@Injectable()
export class WorkTypeSvc extends ItemsSvc {
    items: WorkType[] = []
    selectedItem: WorkType
    //resource: WorkTypeResourceHttpSvc

    constructor(public http: Http) {
        super(http)
        this.selectedItem = new WorkType();
        this.resource = new WorkTypeResourceHttpSvc(http)
    }

    getList(query: any): Promise<WorkType[]> {
        return super.getList(query)
    }
}