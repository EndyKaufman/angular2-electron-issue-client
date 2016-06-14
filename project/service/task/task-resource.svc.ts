import { Headers, Http } from '@angular/http'

import { ResourceSvc } from '../resource.svc'
import { Task } from './task'

export class TaskResourceSvc extends ResourceSvc {
    resourceUrl = 'app/task'

    post(item: Task): Promise<Task> {
        return super.post(item)
    }
    
    put(item: Task) {
        return super.put(item)
    }
    
    constructor(public http: Http) {
        super(http)
    }

    delete(item: Task) {
        return super.delete(item)
    }
    
    getList(query:any): Promise<Task[]> {
        return super.getList(query)
    }
}