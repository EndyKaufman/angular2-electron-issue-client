import { Headers, Http } from '@angular/http'

import { ResourceSvc } from '../resource.svc'
import { Status } from './status'

export class StatusResourceSvc extends ResourceSvc {
    resourceUrl = 'app/status'

    post(item: Status): Promise<Status> {
        return super.post(item)
    }
    
    put(item: Status) {
        return super.put(item)
    }
    
    constructor(public http: Http) {
        super(http)
    }

    delete(item: Status) {
        return super.delete(item)
    }
    
    getList(query:any): Promise<Status[]> {
        return super.getList(query)
    }
}