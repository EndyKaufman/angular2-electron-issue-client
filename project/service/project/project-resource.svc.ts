import { Headers, Http } from '@angular/http';

import { ResourceSvc } from '../resource.svc';
import { Project } from './project';

export class ProjectResourceSvc extends ResourceSvc {
    private resourceUrl = 'app/project';  // URL to web api

    private post(item: Project): Promise<Project> {
        return super.post(item);
    }
    
    private put(item: Project) {
        return super.put(item);
    }

    constructor(private http: Http) {
        super();
    };

    delete(item: Project) {
        return super.delete(item);
    }
    
    getList(): Promise<Project[]> {
        return super.getList();
    }
}