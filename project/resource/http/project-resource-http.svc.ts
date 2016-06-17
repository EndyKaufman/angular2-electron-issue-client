import { Headers, Http } from '@angular/http'

import { ResourceHttpSvc } from '../../class/resource-http.svc'
import { Project } from '../../service/project/project'

export class ProjectResourceHttpSvc extends ResourceHttpSvc {
    resourceUrl = 'app/project'

    post(item: Project): Promise<Project> {
        return super.post(item)
    }
    
    put(item: Project) {
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