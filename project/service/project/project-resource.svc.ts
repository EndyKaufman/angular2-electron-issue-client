import { Headers, Http } from '@angular/http'

import { ResourceSvc } from '../resource.svc'
import { Project } from './project'

export class ProjectResourceSvc extends ResourceSvc {
    resourceUrl = 'app/project'

    post(item: Project): Promise<Project> {
        return super.post(item)
    }
    
    put(item: Project) {
        return super.put(item)
    }

    save(item: Project): Promise<Project> {
        return super.put(item)
    }
    
    constructor(public http: Http) {
        super(http)
    }

    delete(item: Project) {
        return super.delete(item)
    }
    
    getList(query:any): Promise<Project[]> {
        return super.getList(query)
    }
}