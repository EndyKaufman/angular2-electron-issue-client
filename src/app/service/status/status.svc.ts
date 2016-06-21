import { Injectable }    from '@angular/core'
import { Http } from '@angular/http'

import 'rxjs/add/operator/toPromise'

import { ItemsSvc } from '../../class/items.svc'
import { StatusResourceHttpSvc } from '../../resource/http'
import { Status } from './status'

@Injectable()
export class StatusSvc extends ItemsSvc {
    items: Status[] = []
    selectedItem: Status

    constructor(public http: Http, public resource:StatusResourceHttpSvc) {
        super(http)
        this.selectedItem = new Status()
    }

    getList(query: any): Promise<Status[]> {
        return super.getList(query)
    }
}