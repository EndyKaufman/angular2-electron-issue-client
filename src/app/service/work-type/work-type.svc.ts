import { Injectable }    from '@angular/core'
import { Http } from '@angular/http'

import 'rxjs/add/operator/toPromise'

import { ItemsSvc } from '../../class/items.svc'
import { WorkTypeResourceHttpSvc } from '../../resource/http'
import { WorkType } from './work-type'

@Injectable()
export class WorkTypeSvc extends ItemsSvc {
    items: WorkType[] = []
    selectedItem: WorkType

    constructor(public http: Http, public resource:WorkTypeResourceHttpSvc) {
        super(http)
        this.selectedItem = new WorkType();
    }

    getList(query: any): Promise<WorkType[]> {
        return super.getList(query)
    }
}