import { Headers, Http } from '@angular/http'

import { ResourceHttpSvc } from '../../class/resource-http.svc'
import { Status } from '../../service/status'

export class StatusResourceHttpSvc extends ResourceHttpSvc {
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