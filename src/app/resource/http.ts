import {ProjectResourceHttpSvc} from './http/project-resource-http.svc'
import {StatusResourceHttpSvc} from './http/status-resource-http.svc'
import {TaskResourceHttpSvc} from './http/task-resource-http.svc'
import {WorkResourceHttpSvc} from './http/work-resource-http.svc'
import {WorkTypeResourceHttpSvc} from './http/work-type-resource-http.svc'

export {ProjectResourceHttpSvc} from './http/project-resource-http.svc'
export {StatusResourceHttpSvc} from './http/status-resource-http.svc'
export {TaskResourceHttpSvc} from './http/task-resource-http.svc'
export {WorkResourceHttpSvc} from './http/work-resource-http.svc'
export {WorkTypeResourceHttpSvc} from './http/work-type-resource-http.svc'

export const RESOURCE_PROVIDERS:Array<any> = [ProjectResourceHttpSvc, StatusResourceHttpSvc, TaskResourceHttpSvc, WorkResourceHttpSvc, WorkTypeResourceHttpSvc]