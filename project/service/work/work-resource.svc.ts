import { Headers, Http } from '@angular/http';

import { ResourceSvc } from '../resource.svc';
import { Work } from './work';

export class WorkResourceSvc extends ResourceSvc {
    private resourceUrl = 'app/task';  // URL to web api

    private post(item: Work): Promise<Work> {
        return super.post(item);
    }
    
    private put(item: Work) {
        return super.put(item);
    }

    constructor(private http: Http) {
        super();
    };

    delete(item: Work) {
        return super.delete(item);
    }
    
    getList(): Promise<Work[]> {
        return super.getList();
    }
}