import { Injectable }    from '@angular/core'
import { Http } from '@angular/http'

import 'rxjs/add/operator/toPromise'

import { ItemsSvc } from '../items.svc'
import { StatusResourceSvc } from './status-resource.svc'
import { Status } from './status'

@Injectable()
export class StatusSvc extends ItemsSvc {
    items: Status[] = []
    selectedItem: Status
    resource: StatusResourceSvc

    constructor(private http: Http) {
        super(http)
        this.selectedItem = new Status();
        this.resource = new StatusResourceSvc(http)
    }

    getList(query: any): Promise<Status[]> {
        return super.getList(query)
    }
}