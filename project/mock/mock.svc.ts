import {ProjectMockSvc} from './project-mock.svc'
import {StatusMockSvc} from './status-mock.svc'
import {TaskMockSvc} from './task-mock.svc'
import {WorkMockSvc} from './work-mock.svc'
import {WorkTypeMockSvc} from './work-type-mock.svc'

export class MockSvc {
  createDb() {
    let project = new ProjectMockSvc().getList()
    let status = new StatusMockSvc().getList()
    let task = new TaskMockSvc().getList()
    let work = new WorkMockSvc().getList()
    let work_type = new WorkTypeMockSvc().getList()
    return { project, status, task, work , work_type}
  }
}