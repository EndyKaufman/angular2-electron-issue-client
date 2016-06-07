import { Headers, Http } from '@angular/http';

import { ResourceSvc } from '../resource.svc';
import { Work } from './work';

export class WorkResourceSvc extends ResourceSvc {
    private resourceUrl = 'app/task';  // URL to web api

    post(item: Work): Promise<Work> {
        return super.post(item);
    }

    put(item: Work) {
        return super.put(item);
    }

    save(item: Work): Promise<Work> {
        return super.put(item);
    };

    constructor(private http: Http) {
        super(http);
    };

    delete(item: Work) {
        return super.delete(item);
    }

    getList(query: any): Promise<Work[]> {
        return super.getList(query);
    }
}