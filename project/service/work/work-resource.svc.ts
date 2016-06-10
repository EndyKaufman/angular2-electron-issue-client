import { Headers, Http } from '@angular/http'

import { ResourceSvc } from '../resource.svc'
import { Work } from './work'

export class WorkResourceSvc extends ResourceSvc {
    resourceUrl = 'app/work'

    post(item: Work): Promise<Work> {
        return super.post(item)
    }

    put(item: Work) {
        return super.put(item)
    }

    save(item: Work): Promise<Work> {
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