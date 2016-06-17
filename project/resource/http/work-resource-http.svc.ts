import { Headers, Http } from '@angular/http'

import { ResourceHttpSvc } from '../../class/resource-http.svc'
import { Work } from '../../service/work/work'

export class WorkResourceHttpSvc extends ResourceHttpSvc {
    resourceUrl = 'app/work'

    post(item: Work): Promise<Work> {
        return super.post(item)
    }

    put(item: Work) {
        return super.put(item)
    }

    constructor(public http: Http) {
        super(http)
    }

    delete(item: Work) {
        return super.delete(item)
    }

    getList(query: any): Promise<Work[]> {
        return super.getList(query)
    }
}