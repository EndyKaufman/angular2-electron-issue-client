import { Headers, Http } from '@angular/http'

import { ResourceHttpSvc } from '../../class/resource-http.svc'
import { WorkType } from './work-type'

export class WorkTypeResourceHttpSvc extends ResourceHttpSvc {
    resourceUrl = 'app/work_type'

    post(item: WorkType): Promise<WorkType> {
        return super.post(item)
    }
    
    put(item: WorkType) {
        return super.put(item)
    }
    
    constructor(public http: Http) {
        super(http)
    }

    delete(item: WorkType) {
        return super.delete(item)
    }
    
    getList(query:any): Promise<WorkType[]> {
        return super.getList(query)
    }
}