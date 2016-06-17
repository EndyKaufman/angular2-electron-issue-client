import { Injectable }    from '@angular/core'
import { Http } from '@angular/http'

import 'rxjs/add/operator/toPromise'

import { ItemsSvc } from '../../class/items.svc'
import { StatusResourceHttpSvc } from '../../resource/http/status-resource-http.svc'
import { Status } from './status'

@Injectable()
export class StatusSvc extends ItemsSvc {
    items: Status[] = []
    selectedItem: Status
    //resource: StatusResourceHttpSvc

    constructor(public http: Http) {
        super(http)
        this.selectedItem = new Status();
        this.resource = new StatusResourceHttpSvc(http)
    }

    getList(query: any): Promise<Status[]> {
        return super.getList(query)
    }
}