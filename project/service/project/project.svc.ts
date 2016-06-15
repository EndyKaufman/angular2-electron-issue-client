import { Injectable }    from '@angular/core'
import { Http } from '@angular/http'

import 'rxjs/add/operator/toPromise'

import { ItemsSvc } from '../items.svc'
import { ProjectResourceSvc } from './project-resource.svc'
import { Project } from './project'


import {WorkTypeSvc} from '../work-type/work-type.svc'
import {TaskSvc} from '../task/task.svc'


@Injectable()
export class ProjectSvc extends ItemsSvc {
    items: Project[] = []
    selectedItem: Project
    resource: ProjectResourceSvc
    checkedsTitle: string
    checkedsWorkTypeIds: number[] = []
    checkedsStatusIds: number[] = []

    constructor(public http: Http, private taskSvc: TaskSvc, private workTypeSvc: WorkTypeSvc) {
        super(http)
        this.selectedItem = new Project();
        this.resource = new ProjectResourceSvc(http)

        this.itemSelected$.subscribe(item => {
            this.checkedsStatusIds = this.getCheckedsStatusIds()
            this.checkedsWorkTypeIds = this.getCheckedsWorkTypeIds()
            this.updateCheckedsTitle()
        })
        this.itemChecked$.subscribe(items => {
            this.checkedsStatusIds = this.getCheckedsStatusIds()
            this.checkedsWorkTypeIds = this.getCheckedsWorkTypeIds()
            this.updateCheckedsTitle()
        })
    }

    updateCheckedsTitle() {
        this.checkedsTitle = this.selectedItem.title ? this.selectedItem.title : this.checkedItems.map(item => item.title).join(', ')
    }

    getCheckedsStatusIds() {
        console.log('getCheckedsStatusIds')
        let projectsStatusList = this.selectedItem.id ? this.selectedItem.status : this.checkedItems.map(item => item.status)
        let checkedProjectStatusIds = []
        for (let status of projectsStatusList)
            checkedProjectStatusIds = checkedProjectStatusIds.concat(status)
        return checkedProjectStatusIds.filter(function (item, pos, self) {
            return self.indexOf(item) == pos;
        })
    }

    getCheckedsWorkTypeIds() {
        let projectsWorkTypeList = this.selectedItem.id ? this.selectedItem.work_type : this.checkedItems.map(item => item.work_type)
        let checkedProjectWorkTypeIds = []
        for (let work_type of projectsWorkTypeList)
            checkedProjectWorkTypeIds = checkedProjectWorkTypeIds.concat(work_type)
        console.log('getCheckedsWorkTypeIds', checkedProjectWorkTypeIds)
        return checkedProjectWorkTypeIds.filter(function (item, pos, self) {
            return self.indexOf(item) == pos;
        })
    }

    getList(query: any): Promise<Project[]> {
        return super.getList(query)
    }

    getWorkTypesByProjectId(project_id: number) {
        return this.workTypeSvc.items.filter(item => this.getItemById(project_id).work_type.indexOf(item.id) != -1)
    }
    
    getTasksByProjectId(project_id: number) {
        return this.taskSvc.items.filter(item => item.project_id == project_id)
    }
}