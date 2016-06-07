import { Injectable }    from '@angular/core'
import { Http } from '@angular/http'

import 'rxjs/add/operator/toPromise'

import { ItemsSvc } from '../items.svc'
import { WorkResourceSvc } from './work-resource.svc'
import { Work } from './work'

@Injectable()
export class WorkSvc extends ItemsSvc {
    items: Work[]
    selectedItem: Work
    resource: WorkResourceSvc

    constructor(private http: Http) {
        super(http)
        this.selectedItem = new Work()
        this.resource = new WorkResourceSvc(http)
    }

    getList(query: any): Promise<Work[]> {
        return super.getList(query)
    }
}