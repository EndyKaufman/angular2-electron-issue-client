import {ProjectMockSvc} from './project-mock.svc';
import {StatusMockSvc} from './status-mock.svc';
import {TaskMockSvc} from './task-mock.svc';

export class MockSvc {
  createDb() {
    let project = new ProjectMockSvc().getList();
    let status = new StatusMockSvc().getList();
    let task = new TaskMockSvc().getList();
    return { project, status, task };
  }
}