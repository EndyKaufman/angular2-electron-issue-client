import { Injectable }    from '@angular/core'
import { Http } from '@angular/http'

import 'rxjs/add/operator/toPromise'

import { ItemsSvc } from '../items.svc'
import { ProjectResourceSvc } from './project-resource.svc'
import { Project } from './project'

@Injectable()
export class ProjectSvc extends ItemsSvc {
    items: Project[] = []
    selectedItem: Project
    resource: ProjectResourceSvc
    checkedsTitle: string
    checkedsStatusIds: number[] = []
    checkedsWorkTypeIds: number[] = []

    constructor(public http: Http) {
        super(http)
        this.selectedItem = new Project();
        this.resource = new ProjectResourceSvc(http)

        this.itemSelected$.subscribe(item => {
            this.updateCheckedsTitle()
            this.updateCheckedsStatusIds()
            this.updateCheckedsWorkTypeIds()
                        console.log(1,this.checkedsWorkTypeIds)
        })
        this.itemChecked$.subscribe(items => {
            this.updateCheckedsTitle()
            this.updateCheckedsStatusIds()
            this.updateCheckedsWorkTypeIds()
                        console.log(2,this.checkedsWorkTypeIds)
        })
    }

    updateCheckedsTitle() {
        this.checkedsTitle = this.selectedItem.title ? this.selectedItem.title : this.checkedItems.map(item => item.title).join(', ')
    }

    updateCheckedsStatusIds() {
        let projectsStatusList = this.selectedItem.id ? this.selectedItem.status : this.checkedItems.map(item => item.status)
        let checkedProjectStatusIds = []
        for (let status of projectsStatusList)
            checkedProjectStatusIds = checkedProjectStatusIds.concat(status)
        this.checkedsStatusIds = checkedProjectStatusIds.filter(function (item, pos, self) {
            return self.indexOf(item) == pos;
        })
    }

    updateCheckedsWorkTypeIds() {
        let projectsWorkTypeList = this.selectedItem.id ? this.selectedItem.work_type : this.checkedItems.map(item => item.work_type)
        let checkedProjectWorkTypeIds = []
        for (let work_type of projectsWorkTypeList)
            checkedProjectWorkTypeIds = checkedProjectWorkTypeIds.concat(work_type)
        this.checkedsWorkTypeIds = checkedProjectWorkTypeIds.filter(function (item, pos, self) {
            return self.indexOf(item) == pos;
        })
    }

    getList(query: any): Promise<Project[]> {
        return super.getList(query)
    }
}