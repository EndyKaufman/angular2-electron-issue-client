import { Injectable }    from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { ItemsSvc } from '../items.svc';
import { TaskResourceSvc } from './task-resource.svc';
import { Task } from './task';

@Injectable()
export class TaskSvc extends ItemsSvc {
    items: Task[];
    selectedItem: Task;
    resource: TaskResourceSvc;

    constructor(private http: Http) {
        super(http);
        this.resource = new TaskResourceSvc(http);
    };

    getList(query: any): Promise<Task[]> {
        return super.getList(query);
    }
}