import { Headers, Http } from '@angular/http';

import { ResourceSvc } from '../resource.svc';
import { Task } from './task';

export class TaskResourceSvc extends ResourceSvc {
    private resourceUrl = 'app/task';  // URL to web api

    private post(item: Task): Promise<Task> {
        return super.post(item);
    }
    
    private put(item: Task) {
        return super.put(item);
    }

    constructor(private http: Http) {
        super();
    };

    delete(item: Task) {
        return super.delete(item);
    }
    
    getList(): Promise<Task[]> {
        return super.getList();
    }
}