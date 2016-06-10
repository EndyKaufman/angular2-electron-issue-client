import { Headers, Http } from '@angular/http'

import { ResourceSvc } from '../resource.svc'
import { WorkType } from './work-type'

export class WorkTypeResourceSvc extends ResourceSvc {
    resourceUrl = 'app/work_type'

    post(item: WorkType): Promise<WorkType> {
        return super.post(item)
    }
    
    put(item: WorkType) {
        return super.put(item)
    }

    save(item: WorkType): Promise<WorkType> {
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